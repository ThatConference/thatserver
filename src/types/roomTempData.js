import { GraphQLObjectType, GraphQLNonNull, GraphQLFloat } from 'graphql';

const roomTempData = new GraphQLObjectType({
  name: 'RoomTempData',
  description: "It's the data",
  fields: () => ({
    dhtTemperature: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: 'TBD',
    },

    dhtHumidity: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: 'TBD',
    },

    tmp36Temperature: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: 'TBD',
    },
  }),
});

export default roomTempData;
