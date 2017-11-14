import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } from 'graphql';

import id from '../resolvers/id';
import location from './location';

export default new GraphQLObjectType({
  name: 'Venue',
  description: 'tbd',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'System generated unique id for this event.',
      resolve: (...args) => id(...args),
    },

    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'tbd.',
    },

    location: {
      type: location,
      description: 'The location.',
    },
  }),
});
