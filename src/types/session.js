import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } from 'graphql';

const session = new GraphQLObjectType({
  name: 'Session',
  description: 'Session Information',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Session ID',
    },

    speakerName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Session Speaker',
    },

    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Session Title',
    },

    description: {
      type: GraphQLString,
      description: 'Session Description',
    },
  }),
});

export default session;
