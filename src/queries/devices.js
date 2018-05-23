import { GraphQLList } from 'graphql';

import deviceType from '../types/device';

const devices = {
  type: new GraphQLList(deviceType),
  description: 'The room query will return you all active devices.',
  args: {},
  resolve: (root, args, { db }) =>
    db
      .collection('buttons')
      .orderBy('roomName')
      .get()
      .then((docs) => {
        const results = [];
        docs.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
        return results;
      }),
};

// eslint-disable-next-line
export { devices };
