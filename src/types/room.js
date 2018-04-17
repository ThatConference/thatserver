import { GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';

import venueLocation from './venue';
import sessionType from './session';

const room = new GraphQLObjectType({
  name: 'Room',
  description: "Everything you've ever wanted to understand about some rooms.",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Unique ID of a room. Some rooms might have the same name but different locations.',
    },

    deviceId: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Big Red Button device assigned to this room.',
    },

    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The friendly name of a Room.',
    },

    session: {
      type: sessionType,
      description: 'The session listed for this room',
    },

    floor: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The floor or level this room is on.',
    },
    building: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The building this room is location inside of.',
    },

    venue: {
      type: venueLocation,
      description: 'Rooms Location',
    },
  }),
});

export default room;
