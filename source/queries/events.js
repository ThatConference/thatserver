import { GraphQLList } from 'graphql';
import logger from '../utilities/logger';
import getProjection from '../utilities/projections';
import { eventType } from '../types';

export default {
  events: {
    type: new GraphQLList(eventType),
    description: 'Returns the list of events',
    // deprecationReason: 'reason here',
    args: {},
    resolve: (root, args, { mongo: { Events } }, fieldASTs) =>
      new Promise((resolve, reject) => {
        logger.debug(`in events query`);
        const projection = getProjection(fieldASTs);
        Events.find({})
          .select(projection)
          .exec()
          .then(data => resolve(data))
          .catch(err => reject(err));
      }),
  },
};
