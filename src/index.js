import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { execute, subscribe } from 'graphql';
import { express as voyager } from 'graphql-voyager/middleware';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';

import logger from './utilities/logger';
import schema from './schema';
import { pubsub } from './subscriptions/pubsub';

const PORT = Number(process.env.PORT || 8000);
const server = express();

const paths = {
  graphql: '/graphql',
  graphiql: '/graphiql',
  voyager: '/voyager',
};

server.use('*', cors());

// The main GraphQL endpoint
server.use(
  paths.graphql,
  bodyParser.json(),
  graphqlExpress(async (request, response) => ({
    schema,
    context: {
      request,
      debug: true,
    },
  })),
);

// Graphiql endpoint
server.use(
  paths.graphiql,
  graphiqlExpress({
    endpointURL: paths.graphql,
    // subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`,
    subscriptionsEndpoint: 'wss://bigredbutton-165918.appspot.com/subscriptions',
  }),
);

// Voyager ( data viz ) endpoint
server.use(
  paths.voyager,
  voyager({
    endpointUrl: paths.graphql,
  }),
);

// const port = Number(process.env.PORT || 8000);
// server.listen(PORT);

// Wrap the Express server
const ws = createServer(server);
ws.listen(PORT, () => {
  logger.debug(`listening on: http://localhost:${PORT}`);

  // Set up the WebSocket for handling GraphQL subscriptions

  // eslint-disable-next-line
    new SubscriptionServer(
    {
      execute,
      subscribe,
      schema,
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
  logger.debug(`publishing on the socket: ${x}`);

  pubsub.publish('roomChanged', {
    id: `${x}`, name: `${Date.now()}`, floor: '1', building: 'asdf',
  });
}, 5000);
