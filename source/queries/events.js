import { GraphQLList } from 'graphql';

import logger from '../utilities/logger';
import getProjection from '../utilities/projections';

import { event as eventType } from '../types';

export default {
  events: {
    type: new GraphQLList(eventType),
    description: 'Returns the list of events',
    // deprecationReason: 'reason here',
    args: {},
    resolve: async (root, args, { mongo: { Events } }, fieldASTs) => {
      logger.trace(`Event's Query`);
      const projection = getProjection(fieldASTs);

      await Events.find({})
        .select(projection)
        .exec()
        .then(data => data);
    },
  },
};
