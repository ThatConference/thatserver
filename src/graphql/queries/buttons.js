import { GraphQLList } from 'graphql';

import buttonType from '../types/button';

const buttons = {
  type: new GraphQLList(buttonType),
  description: 'The room query will return you all active big red buttons.',
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
export { buttons };
