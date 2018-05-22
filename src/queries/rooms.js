import { GraphQLList } from 'graphql';

import roomType from '../types/room';
import mockData from '../data/room';

const rooms = {
  type: new GraphQLList(roomType),
  description: 'The room query will return you a list of all rooms.',
  args: {},

  resolve: async () => mockData,
};

// eslint-disable-next-line
export { rooms };
