import { GraphQLList, GraphQLString } from 'graphql';
import { withFilter } from 'graphql-subscriptions';

import logger from '../utilities/logger';
import roomType from '../types/room';
import { pubsub } from './pubsub';

const roomChanged = {
  type: roomType,
  description: 'The room subscription',
  args: {
    roomId: {
      type: GraphQLString,
    },
  },

  resolve: payload => {
    logger.data('resolve payload', payload);
    return payload;
  },

  subscribe: withFilter(
    () => pubsub.asyncIterator('roomChanged'),
    (payload, variables) => {
      logger.debug('sub payload', payload);
      logger.debug('sub vars', variables);

      return true;
    }
  ),
};

// eslint-disable-next-line
export { roomChanged };
