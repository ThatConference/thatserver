import 'dotenv/config';

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { execute, subscribe } from 'graphql';
import { express as voyager } from 'graphql-voyager/middleware';
import { PubSub } from 'graphql-subscriptions';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import Cache from 'node-cache';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';

import db from './data/firebase';
import logger from './utilities/logger';
import schema from './graphql';
import routes from './api';
import deviceMonitor from './utilities/deviceMonitor';

const PORT = Number(process.env.PORT || 8000);
const app = express();

const paths = {
  graphql: '/graphql',
  graphiql: '/graphiql',
  voyager: '/voyager',
};

const cache = new Cache({ checkperiod: 2 });
const pubsub = new PubSub();

app.set('pubsub', pubsub);
app.set('cache', cache);
app.set('db', db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('*', cors());

routes(app);

// The main GraphQL endpoint
app.use(
  paths.graphql,
  bodyParser.json(),
  graphqlExpress(async (request, response) => ({
    schema,
    context: {
      request,
      db,
      debug: true,
      pubsub,
      cache,
    },
  })),
);

// Graphiql endpoint
app.use(
  paths.graphiql,
  graphiqlExpress({
    endpointURL: paths.graphql,
    subscriptionsEndpoint: `${process.env.SUBSCRIPTIONS_HOST}:${PORT}/subscriptions`,
  }),
);

// Voyager ( data viz ) endpoint
app.use(
  paths.voyager,
  voyager({
    endpointUrl: paths.graphql,
  }),
);

// Wrap the Express server
const ws = createServer(app);
ws.listen(PORT, () => {
  logger.info(`listening on: ${process.env.SUBSCRIPTIONS_HOST}:${PORT}`);

  // Set up the WebSocket for handling GraphQL subscriptions
  // eslint-disable-next-line
  new SubscriptionServer(
    {
      execute,
      subscribe,
      schema,
      onOperation: (message, params) => ({
        ...params,
        context: {
          pubsub,
          cache,
          db,
        },
      }),
    },
    {
      server: ws,
      path: '/subscriptions',
    },
  );
});

// start the device monitor
deviceMonitor.run(cache, db);
