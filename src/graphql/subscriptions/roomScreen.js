import { GraphQLInt, GraphQLString } from 'graphql';
import { withFilter } from 'graphql-subscriptions';

import roomType from '../types/room';

const roomScreenChanged = {
  type: roomType,
  description: 'Room Screen Subscription',
  args: {
    eventId: {
      name: 'eventId',
      type: GraphQLString,
    },
    roomName: {
      name: 'roomName',
      type: GraphQLInt,
    },
  },

  resolve: payload => payload,

  subscribe: withFilter(
    (rootValue, args, { pubsub }) => pubsub.asyncIterator('roomScreenChanged'),
    (payload, variables) => variables.roomName === payload.id,
  ),
};

// eslint-disable-next-line
export { roomScreenChanged };
