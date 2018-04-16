import { GraphQLList } from 'graphql';

import logger from '../utilities/logger';
import roomType from '../types/room';

const mockData = [
  {
    id: '1',
    name: 'A',
    floor: '1',
    building: 'Main Convention Center',
  },
  {
    id: '2',
    name: 'B',
    floor: '1',
    building: 'Main Convention Center',
  },
  {
    id: '3',
    name: 'C',
    floor: '1',
    building: 'Main Convention Center',
  },
];

const rooms = {
  type: new GraphQLList(roomType),
  description: 'The room query will return you a list of all rooms.',
  // deprecationReason: 'reason here', // this is valid on an operation as well
  args: {},
  resolve: async (root, args, options, fieldASTs) =>
    new Promise((resolve, reject) => {
      logger.debug('in room query');
      return resolve(mockData);
    }),
};

export { rooms };
