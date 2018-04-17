import { GraphQLList, GraphQLString } from 'graphql';
import { withFilter } from 'graphql-subscriptions';

import logger from '../utilities/logger';
import roomType from '../types/room';
import { pubsub } from './pubsub';

const roomTempChanged = {
  type: roomType,
  description: 'Room Temp Subscription',
  args: {},

  resolve: (payload) => {
    logger.data('resolve payload', payload);
    return payload;
  },

  subscribe: withFilter(
    () => pubsub.asyncIterator('roomTempChanged'),
    (payload, variables) => {
      logger.debug('sub payload', payload);
      logger.debug('sub vars', variables);

      return true;
    },
  ),
};

// eslint-disable-next-line
export { roomTempChanged };
