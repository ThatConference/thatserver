import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { execute, subscribe } from 'graphql';
import { express as voyager } from 'graphql-voyager/middleware';
import { PubSub } from 'graphql-subscriptions';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';

import logger from './utilities/logger';
import schema from './schema';
import routes from './api';

const PORT = Number(process.env.PORT || 8000);
const app = express();

const paths = {
  graphql: '/graphql',
  graphiql: '/graphiql',
  voyager: '/voyager',
};

const pubsub = new PubSub();

app.set('pubsub', pubsub);

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
      debug: true,
      pubsub,
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
  logger.debug(`listening on: http://localhost:${PORT}`);

  // Set up the WebSocket for handling GraphQL subscriptions

  // eslint-disable-next-line
    new SubscriptionServer(
    {
      execute,
      subscribe,
      schema,
      onOperation: (message, params, webSocket) => ({
        params,
        context: { pubsub },
      }),
    },
    {
      server: ws,
      path: '/subscriptions',
    },
  );
});

let x = 0;
setInterval(() => {
  x += 1;

  pubsub.publish('roomScreenChanged', {
    id: `${x}`,
    name: `${Date.now()}`,
    floor: '1',
    building: 'asdf',
  });

  if (x > 300) {
    x = 1;
  }
}, 5000);
