import express from 'express';
import graphqlHTTP from 'express-graphql';
import { express as voyager } from 'graphql-voyager/middleware';

import logger from './utilities/logger';
import schema from './schema';

const app = express();

const paths = {
  graphql: `/graphql`,
  graphiql: `/graphiql`,
  voyager: `/voyager`,
};

const dataLoaders = () => ({
  speakers: {},
  sponsors: {},
});

app.use(
  paths.graphql,
  graphqlHTTP(async (request, response, graphQLParams) => ({
    schema,
    // rootValue: await someFunctionToGetRootValue(request),
    context: {
      request,
      dataLoaders: await dataLoaders(),
      debug: true,
    },
    graphiql: false,
  }))
);

app.use(
  paths.graphiql,
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use(
  paths.voyager,
  voyager({
    endpointUrl: paths.graphql,
  })
);

const port = Number(process.env.PORT || 8000);
logger.debug(`listening on: http://localhost:${port}`);

app.listen(port);
