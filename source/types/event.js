import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLList, GraphQLDate } from 'graphql';
import party from './party';
import session from './session';
import sponsor from './sponsor';
import venue from './venue';

import { id } from '../resolvers/id';

export default new GraphQLObjectType({
  name: 'Event',
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

    shortDescription: {
      type: GraphQLString,
      description: 'Short Description of the event.',
    },

    description: {
      type: new GraphQLNonNull(GraphQLString),
      description:
        'Brief overview detatailing what this event is really all about. ex. That Conference, Summer Camp For Geeks',
    },

    version: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
    },

    startDate: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The date and time this event starts.',
    },

    endDate: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The date and time this event ends.',
    },

    venue: {
      type: venue,
      description: 'The location of this event.',
    },

    parties: {
      type: new GraphQLList(party),
      description: 'Sessions on the schedule for this event.',
    },

    sessions: {
      type: new GraphQLList(session),
      description: 'Sessions on the schedule for this event.',
    },

    sponsors: {
      type: new GraphQLList(sponsor),
      description: 'Partners and Sponsors supporting this event.',
    },
  }),
});
