import { GraphQLList, GraphQLString } from 'graphql';

import sessionType from '../types/session';
import sessionResolver from '../resolvers/sessions';

const sessions = {
  type: new GraphQLList(sessionType),
  description: 'The room query will return you a list of all rooms for a given event.',
  args: {
    eventId: {
      name: 'eventId',
      type: GraphQLString,
    },
  },

  resolve: sessionResolver,
};

// eslint-disable-next-line
export { sessions };
