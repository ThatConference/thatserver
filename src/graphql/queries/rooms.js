import { GraphQLList, GraphQLString } from 'graphql';

import roomType from '../types/room';
import roomResolver from '../resolvers/rooms';

const rooms = {
  type: new GraphQLList(roomType),
  description: 'The room query will return you a list of all rooms for a given event.',
  args: {
    eventId: {
      name: 'eventId',
      type: GraphQLString,
    },
  },

  resolve: roomResolver,
};

// eslint-disable-next-line
export { rooms };
