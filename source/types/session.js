import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql';

import party from './party';
import favorite from './favorite';

import id from '../resolvers/id';

export default new GraphQLObjectType({
  name: 'Session',
  description: 'A session is defined as a presentaiton that a speaker will give.',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'System generated unique id for this session.',
      resolve: (...args) => id(...args),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Title of this session.',
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Brief overview detatailing what this session will be about.',
    },
    speakers: {
      type: new GraphQLList(party),
      description: 'speakers on the sessions',
    },
    favorites: {
      type: new GraphQLList(favorite),
      description: 'speakers on the sessions',
    },
  }),
});
