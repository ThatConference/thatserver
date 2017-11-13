import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql';

import session from './session';
import speaker from './speaker';
import event from './event';

export default new GraphQLObjectType({
  name: 'Sponsor',
  description: 'A partner or sponsor who is supporting the success of an event',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'System generated unique id for this speaker.',
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

    speakers: {
      type: new GraphQLList(speaker),
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
  }),
});
