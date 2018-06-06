import { GraphQLList } from 'graphql';

import eventType from '../types/event';

const events = {
  type: new GraphQLList(eventType),
  description: 'The query returns you all events.',
  args: {},

  resolve: (root, args, { db }) =>
    db
      .collection('events')
      .orderBy('startDate')
      .get()
      .then((docs) => {
        const results = [];
        docs.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
        return results;
      }),
};

// eslint-disable-next-line
export { events };
