import { GraphQLList } from 'graphql';

import logger from '../utilities/logger';
import getProjection from '../utilities/projections';

import { sessionType } from '../types';
// import { Sessions } from '../db/mongo';

export default {
  sessions: {
    type: new GraphQLList(sessionType),
    description: 'The sessions query will return you a list of all accepted sessions blaa blaa blaa.',
    // deprecationReason: 'reason here',
    args: {},
    resolve: (root, args, options, fieldASTs) =>
      new Promise((resolve, reject) => {
        logger.trace(`in speakers query`);
        const projection = getProjection(fieldASTs);
        // Sessions.find({})
        //   .select(projection)
        //   .exec()
        //   .then(data => resolve(data))
        //   .catch(err => reject(err));
      }),
  },
};
