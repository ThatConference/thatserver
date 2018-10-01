import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } from 'graphql';

const deviceHealth = new GraphQLObjectType({
  name: 'DeviceHealth',
  description: 'Device Health Stats',
  fields: () => ({
    coreId: {
      type: GraphQLString,
      description: 'Button Core Id',
    },
  }),
});

export default deviceHealth;
