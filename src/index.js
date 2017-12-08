import bodyParser from 'body-parser';
import express from 'express';
import { express as voyager } from 'graphql-voyager/middleware';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import logger from './utilities/logger';
import schema from './schema';

const app = express();

const paths = {
  graphql: `/graphql`,
  graphiql: `/graphiql`,
  voyager: `/voyager`,
};

// The GraphQL endpoint
// app.use(paths.graphql, bodyParser.json(), graphqlExpress({ schema }));
app.use(
  paths.graphql,
  bodyParser.json(),
  graphqlExpress(async (request, response) => ({
    schema,
    context: {
      request,
      debug: true,
    },
  }))
);

// The Graphiql endpoint
app.use(paths.graphiql, graphiqlExpress({ endpointURL: '/graphql' }));

// Voyager ( data viz ) endpoint
app.use(
  paths.voyager,
  voyager({
    endpointUrl: paths.graphql,
  })
);

const port = Number(process.env.PORT || 8000);
logger.debug(`listening on: http://localhost:${port}`);

app.listen(port);
