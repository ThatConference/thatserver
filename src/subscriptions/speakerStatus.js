import { GraphQLInt } from 'graphql';
import { withFilter } from 'graphql-subscriptions';

import logger from '../utilities/logger';
import speakerStatusType from '../types/speakerStatus';

import * as deviceData from '../data/devices';

const speakerStatusChanged = {
  type: speakerStatusType,
  description: 'Speaker Status Subscription',
  args: {
    roomId: {
      type: GraphQLInt,
    },
  },

  resolve: payload => payload,

  subscribe: withFilter(
    (rootValue, args, { pubsub }) => pubsub.asyncIterator('speakerStatusChanged'),
    (payload, variables) => {
      logger.trace('Speaker Status Subscription');

      // return all no matter what
      if (variables.roomId === 0) {
        return true;
      }

      return variables.roomId === deviceData.deviceIdToRoomId(payload.coreid);
    },
  ),
};

// eslint-disable-next-line
export { speakerStatusChanged };
