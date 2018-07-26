import { GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString, GraphQLList } from 'graphql';

import venueType from './venue';
import speakerType from './speakers';
import sessionType from './session';
import roomType from './room';

import eventTypeResolver from '../resolvers/eventType';
import roomResolver from '../resolvers/rooms';
import sessionsResolver from '../resolvers/sessions';

const event = new GraphQLObjectType({
  name: 'Event',
  description: "Everything you've ever wanted about THAT Events.",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Just a unique id.',
    },

    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'THAT name.',
    },

    startDate: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Start date of this event.',
    },

    endDate: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Ending date of this event.',
    },

    year: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The year this event takes place in.',
    },

    venue: {
      type: new GraphQLNonNull(venueType),
      description: 'Details about where this event is located.',
    },

    speakers: {
      type: new GraphQLList(speakerType),
      description: 'speakers for this event',
      resolve: eventTypeResolver.speakers,
    },

    sessions: {
      type: new GraphQLList(sessionType),
      description: 'speakers for this event',
      resolve: sessionsResolver.getSessionsByEvent,
    },

    rooms: {
      type: new GraphQLList(roomType),
      description: 'Rooms allocated for this event',
      resolve: roomResolver,
    },
  }),
});

export default event;
