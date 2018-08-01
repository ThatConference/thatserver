import { withFilter } from 'graphql-subscriptions';

import logger from '../../utilities/logger';
import deploymentType from '../types/deployment';

const deployment = {
  type: deploymentType,
  description: 'Deployment Subscription',
  args: {},

  resolve: payload => payload,

  subscribe: withFilter(
    (rootValue, args, { pubsub }) => pubsub.asyncIterator('deploymentChanged'),
    // eslint-disable-next-line
    (payload, variables) => {
      logger.trace('Deployment Subscription Called');
      return true;
    },
  ),
};

// eslint-disable-next-line
export { deployment };
