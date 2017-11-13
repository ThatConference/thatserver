import { GraphQLList } from 'graphql';

import logger from '../utilities/logger';
import getProjection from '../utilities/projections';

import { session as sessionType } from '../types';
// import { Sessions } from '../db/mongo';

export default {
  sessions: {
    type: new GraphQLList(sessionType),
    description: 'The sessions query will return you a list of all accepted sessions blaa blaa blaa.',
    // deprecationReason: 'reason here',
    args: {},
    resolve: async (root, args, options, fieldASTs) => {
      logger.trace(`Sessions's Query`);
      const projection = getProjection(fieldASTs);
      // await Sessions.find({})
      //   .select(projection)
      //   .exec()
      //   .then(data => data)
    },
  },
};
