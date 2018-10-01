import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } from 'graphql';

const deviceHealth = new GraphQLObjectType({
  name: 'Device Health',
  description: 'Device Health Stats',
  fields: () => ({
    coreId: {
      type: GraphQLString,
      description: 'Button Core Id',
    },
  }),
});

export default deviceHealth;
