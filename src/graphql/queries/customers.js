import { GraphQLList, GraphQLString } from 'graphql';

import customerType from '../types/customer';
import customerResolver from '../resolvers/customers';

const customers = {
  type: new GraphQLList(customerType),
  description: 'The room query will return you a list of all rooms for a given event.',
  args: {
    customerId: {
      name: 'customerId',
      type: GraphQLString,
    },
  },

  resolve: customerResolver,
};

// eslint-disable-next-line
export { customers };
