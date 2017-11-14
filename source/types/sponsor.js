import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql';

import session from './session';
import party from './party';
import event from './event';
import location from './location';
import badgeScan from './badgeScan';

import id from '../resolvers/id';

export default new GraphQLObjectType({
  name: 'Sponsor',
  description: 'A partner or sponsor who is supporting the success of an event',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'System generated unique id for this speaker.',
      resolve: (...args) => id(...args),
    },

    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Speakers Email Address',
    },

    logo: {
      type: new GraphQLNonNull(GraphQLString),
      description: "sponsor's company logo.",
    },

    event: {
      type: new GraphQLList(event),
      description: 'The events this sponsor has supported.',
    },

    contacts: {
      type: new GraphQLList(party),
      description: 'sessions....',
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
    location: {
      type: location,
      description: 'their location',
    },
    badgeScans: {
      type: new GraphQLList(badgeScan),
      description: 'their location',
    },
  }),
});
