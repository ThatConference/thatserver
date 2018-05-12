import { GraphQLList } from 'graphql';

import deviceType from '../types/device';
import { roomMappings } from '../data/devices';

const devices = {
  type: new GraphQLList(deviceType),
  description: 'The room query will return you all active devices.',
  args: {},
  resolve: () => roomMappings,
};

export { devices };
