import { GraphQLString } from 'graphql';
import { withFilter } from 'graphql-subscriptions';

import logger from '../utilities/logger';
import speakerStatusType from '../types/speakerStatus';

const speakerStatusChanged = {
  type: speakerStatusType,
  description: 'Speaker Status Subscription',
  args: {},

  resolve: payload =>
  // logger.data('resolve payload', payload);
    payload,

  subscribe: withFilter(
    (rootValue, args, { pubsub }, info) => pubsub.asyncIterator('speakerStatusChanged'),
    (payload, variables) =>
    // logger.debug('sub payload', payload);
    // logger.debug('sub vars', variables);
      true,
  ),
};

// eslint-disable-next-line
export { speakerStatusChanged };
