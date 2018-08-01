import { GraphQLObjectType, GraphQLString } from 'graphql';

const deployment = new GraphQLObjectType({
  name: 'Deployment',
  description: 'Information about a deployment',
  fields: () => ({
    shouldUpdate: {
      type: GraphQLString,
      description: 'Should the source be updated?',
    },
  }),
});

export default deployment;
