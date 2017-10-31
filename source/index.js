import express from 'express';
import graphqlHTTP from 'express-graphql';

import logger from './utils/logger';

const app = express();
const schema = {};

const paths = {
  graphql: `/graphql`,
  graphiql: `/graphiql`,
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

const port = Number(process.env.PORT || 8000);
logger.debug(`listening on: http://localhost:${port}`);

app.listen(port);
