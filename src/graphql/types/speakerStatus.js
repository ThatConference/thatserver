import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLInt } from 'graphql';

const speakerStatus = new GraphQLObjectType({
  name: 'SpeakerStatus',
  description: "Everything you've ever wanted to understand about some speaker status.",
  fields: () => ({
    event: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'TBD',
    },
    data: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'TBD',
    },
    published_at: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'TBD',
    },
    coreid: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'TBD',
    },
    userid: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'TBD',
    },
    fw_version: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'TBD',
    },
    public: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'TBD',
    },
  }),
});

export default speakerStatus;
