import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';

const device = new GraphQLObjectType({
  name: 'Device',
  description: "Everything you've ever wanted about the Big Red Button Devices.",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Just a unique id.',
    },

    tcId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'THAT Conference assigned id.',
    },

    coreId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The Particle core id of this device.',
    },

    roomName: {
      type: GraphQLString,
      description: 'Venue Friendly Room Name',
    },

    particleName: {
      type: GraphQLID,
      description: 'THAT Conference assigned Particle Device name listed in the Particle Cloud.',
    },

    isAssigned: {
      type: GraphQLBoolean,
      description: 'Tells you if this device has been assigned for usage.',
    },
  }),
});

export default device;
