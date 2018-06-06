import { GraphQLList, GraphQLString } from 'graphql';

import speakerType from '../types/speakers';

const speakers = {
  type: new GraphQLList(speakerType),
  description: 'The room query will return you all active devices.',
  args: {
    eventId: {
      name: 'eventId',
      type: GraphQLString,
    },
  },
  resolve: (root, args, { db }) =>
    db
      .collection('speakers')
      .where('eventId', '==', args.eventId)
      .get()
      .then((docs) => {
        const results = [];
        docs.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
        return results;
      }),
};

// eslint-disable-next-line
export { speakers };
