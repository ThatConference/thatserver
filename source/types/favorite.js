import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } from 'graphql';

import id from '../resolvers/id';
import event from './event';

export default new GraphQLObjectType({
  name: 'SessionFavorite',
  description: 'tbd',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'System generated unique id for this event.',
      resolve: (...args) => id(...args),
    },

    session: {
      type: GraphQLString,
      description: 'tbd.',
    },

    event: {
      type: event,
      description: 'what event.',
    },
  }),
});
