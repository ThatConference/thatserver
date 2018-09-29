import { GraphQLString } from 'graphql';
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

const onRoomTempByCoreId = {
  type: roomTempType,
  description: 'Room Temp Subscription',
  args: {
    coreId: {
      type: GraphQLString,
    },
  },

  resolve: payload => payload,

  subscribe: withFilter(
    (rootValue, args, { pubsub }) => pubsub.asyncIterator('roomTempChanged'),
    // variables is what the connection was setup with.
    // payload is the request
    async (payload, variables, { cache, db }) => {
      logger.trace(`Speaker Status Subscription, coreId: ${variables.coreId}`);
      return variables.coreId === payload.coreId;
    },
  ),
};

// eslint-disable-next-line
export { roomTempChanged, onRoomTempByCoreId };
