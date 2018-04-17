import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLInt } from 'graphql';

import roomTempData from './roomTempData';

const roomTemp = new GraphQLObjectType({
  name: 'RoomTemp',
  description: "Everything you've ever wanted to understand about some room temps.",
  fields: () => ({
    event: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'TBD',
    },
    data: {
      type: new GraphQLNonNull(roomTempData),
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

export default roomTemp;
