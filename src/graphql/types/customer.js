import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } from 'graphql';

const customer = new GraphQLObjectType({
  name: 'Customer',
  description: 'Customer Buttons.',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Document Id.',
    },
    roomName: {
      type: GraphQLString,
      description: 'Assigned Room Name.',
    },
    coreId: {
      type: GraphQLString,
      description: 'Button Core Id',
    },
  }),
});

export default customer;
