import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql';

import session from './session';
import favorite from './favorite';

// const { session } = require('../resolvers/session');
// const { firstName } = require('../resolvers/speaker');
import id from '../resolvers/id';

export default new GraphQLObjectType({
  name: 'Party',
  description: 'A speaker is defined as someone who actually speaks but not to be confused with anyone who can speak.',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'System generated unique id for this speaker.',
      resolve: (...args) => id(...args),
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Speakers First Name',
      // resolve: (...args) => firstName(...args),
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Speakers Last Name',
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Speakers Email Address',
    },
    roles: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'roles',
    },
    favorites: {
      type: new GraphQLList(favorite),
      description: 'favorite....',
    },
    sessions: {
      type: new GraphQLList(session),
      description: 'sessions....',
    },
    company: {
      deprecationReason: 'We really do not care where you work we care what you do',
      type: GraphQLString,
      description: 'Speakers Company',
    },
  }),
});
