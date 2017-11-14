import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } from 'graphql';

import id from '../resolvers/id';
import event from './event';
import party from './party';
import sponsor from './sponsor';

export default new GraphQLObjectType({
  name: 'BadgeScan',
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
    sponsor: {
      type: sponsor,
      description: 'sponsor.',
    },
  }),
});
