import { GraphQLList } from 'graphql';

import deviceType from '../types/device';
import { roomMappings } from '../data/devices';

const devices = {
  type: new GraphQLList(deviceType),
  description: 'The room query will return you all active devices.',
  args: {},
  resolve: (root, args, { db }, fieldASTs) =>
    // roomMappings.forEach(room => db.collection('buttons').add(room)),
    db
      .collection('buttons')
      .orderBy('roomName')
      .get()
      .then((docs) => {
        const results = [];
        docs.forEach(doc => results.push(doc.data()));
        return results;
      }),
};

export { devices };
