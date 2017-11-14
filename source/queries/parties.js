import { GraphQLList } from 'graphql';

import logger from '../utilities/logger';
import getProjection from '../utilities/projections';
import { party as speakerType } from '../types';

export default {
  parties: {
    type: new GraphQLList(speakerType),
    description: 'The speakers query will return you a list of all speakers blaa blaa blaa.',
    // deprecationReason: 'reason here',
    args: {},
    resolve: async (root, args, { mongo: { Speakers } }, fieldASTs) => {
      logger.trace(`Speaker's Query`);
      const projection = getProjection(fieldASTs);
      await Speakers.find({})
        .select(projection)
        .exec()
        .then(data => data);
    },
  },
};
