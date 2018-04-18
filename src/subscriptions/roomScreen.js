import { GraphQLString, GraphQLInt } from 'graphql';
import { withFilter } from 'graphql-subscriptions';

import logger from '../utilities/logger';
import roomType from '../types/room';

const roomScreenChanged = {
  type: roomType,
  description: 'Room Screen Subscription',
  args: {
    roomId: {
      type: GraphQLInt,
    },
  },

  resolve: payload =>
    // logger.data('resolve payload', payload);
    payload,

  subscribe: withFilter(
    (rootValue, args, { pubsub }, info) => pubsub.asyncIterator('roomScreenChanged'),
    (payload, variables) => variables.roomId === payload.id,
  ),
};

// eslint-disable-next-line
export { roomScreenChanged };
