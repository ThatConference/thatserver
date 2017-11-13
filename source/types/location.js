import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLList, GraphQLDate } from 'graphql';

import event from './event';

export default new GraphQLObjectType({
  name: 'Location',
  description: 'The named collection of a community of people gathering to share all of their awesome.',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'System generated unique id for this event.',
      resolve: (...args) => id(...args),
    },

    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The event name, ex. That Conference.',
    },

    events: {
      type: new GraphQLList(event),
      description: 'The location of this event.',
    },
  }),
});
