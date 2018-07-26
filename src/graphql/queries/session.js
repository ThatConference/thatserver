import { GraphQLList, GraphQLString } from 'graphql';

import sessionType from '../types/session';
import sessionsResolver from '../resolvers/sessions';

const session = {
  type: new GraphQLList(sessionType),
  description: 'The room query will return you a list of all rooms for a given event.',
  args: {
    eventId: {
      name: 'eventId',
      type: GraphQLString,
    },
    roomName: {
      name: 'roomName',
      type: GraphQLString,
    },
  },

  resolve: sessionsResolver.getSessionsByRoom,
};

// eslint-disable-next-line
export { session };
