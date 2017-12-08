import { GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';

import location from './location';

const room = new GraphQLObjectType({
  name: 'Room',
  description: "Everything you've ever wanted to understand about some rooms.",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Unique ID of a room. Some rooms might have the same name but different locations.',
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The friendly name of a Room.',
    },
    floor: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The floor or level this room is on.',
    },
    building: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The building this room is location inside of.',
    },
    // location: {
    //   type: location,
    //   description: 'The location this room is part of.',
    // },
  }),
});

export default room;
