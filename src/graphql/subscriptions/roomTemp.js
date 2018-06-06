import { withFilter } from 'graphql-subscriptions';

import logger from '../../utilities/logger';
import roomTempType from '../types/roomTemp';

const roomTempChanged = {
  type: roomTempType,
  description: 'Room Temp Subscription',
  args: {},

  resolve: payload => payload,

  subscribe: withFilter(
    (rootValue, args, { pubsub }) => pubsub.asyncIterator('roomTempChanged'),
    // eslint-disable-next-line
    (payload, variables) => {
      logger.trace('Room Temp Subscription');
      return true;
    },
  ),
};

// eslint-disable-next-line
export { roomTempChanged };
