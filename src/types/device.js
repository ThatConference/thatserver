import { GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';

const device = new GraphQLObjectType({
  name: 'Device',
  description: "Everything you've ever wanted about the BRB Device.",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'THAT Conference unique id',
    },

    coreId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'the particle core id of the device',
    },

    roomName: {
      type: GraphQLString,
      description: 'Venue Friendly Room Name',
    },

    particleId: {
      type: GraphQLID,
      description: 'THAT Conference assigned Particle Device Id.',
    },
  }),
});

export default device;
