import { GraphQLList, GraphQLString } from 'graphql';

import eventType from '../types/event';

const events = {
  type: new GraphQLList(eventType),
  description: 'The query returns you all events.',
  args: {
    eventId: {
      name: 'eventId',
      type: GraphQLString,
    },
  },

  resolve: (root, args, { db }) => {
    if (args.eventId) {
      return db
        .collection('events')
        .doc(args.eventId)
        .get()
        .then(doc => [{ id: doc.id, ...doc.data() }]);
    }

    return db
      .collection('events')
      .orderBy('startDate')
      .get()
      .then((docs) => {
        const results = [];
        docs.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
        return results;
      });
  },
};

// eslint-disable-next-line
export { events };
