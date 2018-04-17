import { GraphQLString } from 'graphql';
import { withFilter } from 'graphql-subscriptions';

import logger from '../utilities/logger';
import roomType from '../types/room';

const roomScreenChanged = {
  type: roomType,
  description: 'Room Screen Subscription',
  args: {
    roomId: {
      type: GraphQLString,
    },
  },

  resolve: payload =>
  // logger.data('resolve payload', payload);
    payload,

  subscribe: withFilter(
    (rootValue, args, { pubsub }, info) => pubsub.asyncIterator('roomScreenChanged'),
    (payload, variables) => {
      // logger.debug('sub payload', payload);
      // logger.debug('sub vars', variables);

      if (variables.roomId === 'A') {
        return payload.id % 2 === 0;
      }

      if (variables.roomId === 'B') {
        return payload.id % 2 !== 0;
      }

      return true;
    },
  ),
};

// eslint-disable-next-line
export { roomScreenChanged };
