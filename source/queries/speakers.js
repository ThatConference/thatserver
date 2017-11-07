import { GraphQLList } from 'graphql';

import logger from '../utilities/logger';
import getProjection from '../utilities/projections';
import { speakerType } from '../types';

export default {
  speakers: {
    type: new GraphQLList(speakerType),
    description: 'The speakers query will return you a list of all speakers blaa blaa blaa.',
    // deprecationReason: 'reason here',
    args: {},
    resolve: (root, args, { mongo: { Speakers } }, fieldASTs) =>
      new Promise((resolve, reject) => {
        logger.debug(`in speakers query`);
        const projection = getProjection(fieldASTs);
        Speakers.find({})
          .select(projection)
          .exec()
          .then(data => resolve(data))
          .catch(err => reject(err));
      }),
  },
};
