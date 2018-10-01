import { GraphQLString } from 'graphql';
import { withFilter } from 'graphql-subscriptions';

import logger from '../../utilities/logger';
import deviceHealthType from '../types/deviceHealth';

const onDeviceMonitor = {
  type: deviceHealthType,
  description: 'Device Health',
  args: {
    coreId: {
      type: GraphQLString,
    },
  },

  resolve: payload => payload,

  subscribe: withFilter(
    (rootValue, args, { pubsub }) => pubsub.asyncIterator('deviceHealth'),
    // variables is what the connection was setup with.
    // payload is the request
    async (payload, variables, { cache, db }) => {
      logger.trace(`Device Health Subscription, coreId: ${variables.coreId}`);
      // coreid is cased wrong from the device
      return variables.coreId === payload.coreid;
    },
  ),
};

// eslint-disable-next-line
export { onDeviceMonitor };
