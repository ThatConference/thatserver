import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql';

import id from '../resolvers/id';
import event from './event';
import party from './party';
import scan from './badgeScan';

export default new GraphQLObjectType({
  name: 'Badge',
  description: 'tbd',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'System generated unique id for this event.',
      resolve: (...args) => id(...args),
    },
    party: {
      type: party,
      description: 'tbd.',
    },
    event: {
      type: event,
      description: 'what event.',
    },
    scans: {
      type: new GraphQLList(scan),
      description: 'what event.',
    },
  }),
});
