import { GraphQLList, GraphQLString } from 'graphql';
import { withFilter } from 'graphql-subscriptions';

import logger from '../utilities/logger';
import roomType from '../types/room';
import { pubsub } from './pubsub';

const speakerStatusChanged = {
  type: roomType,
  description: 'Speaker Status Subscription',
  args: {},

  resolve: (payload) => {
    logger.data('resolve payload', payload);
    return payload;
  },

  subscribe: withFilter(
    () => pubsub.asyncIterator('speakerStatusChanged'),
    (payload, variables) => {
      logger.debug('sub payload', payload);
      logger.debug('sub vars', variables);

      return true;
    },
  ),
};

// eslint-disable-next-line
export { speakerStatusChanged };
