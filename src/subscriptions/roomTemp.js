import { GraphQLList, GraphQLString } from 'graphql';
import { withFilter } from 'graphql-subscriptions';

import logger from '../utilities/logger';
import roomTempType from '../types/roomTemp';

const roomTempChanged = {
  type: roomTempType,
  description: 'Room Temp Subscription',
  args: {},

  resolve: payload =>
  // logger.data('resolve payload', payload);
    payload,

  subscribe: withFilter(
    (rootValue, args, { pubsub }, info) => pubsub.asyncIterator('roomTempChanged'),
    (payload, variables) => {
      logger.debug('in subscription');
      // logger.debug('sub payload', payload);
      // logger.debug('sub vars', variables);

      return true;
    },
  ),
};

// eslint-disable-next-line
export { roomTempChanged };
