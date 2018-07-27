import { GraphQLString, GraphQLList } from 'graphql';
import { withFilter } from 'graphql-subscriptions';

import sessionType from '../types/session';

const roomScreenChanged = {
  type: new GraphQLList(sessionType),
  description: 'Room Screen Subscription',
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

  resolve: payload => payload,

  subscribe: withFilter(
    (rootValue, args, { pubsub }) => pubsub.asyncIterator('roomScreenChanged'),
    (payload, variables) => variables.roomName === payload.id,
  ),
};

// eslint-disable-next-line
export { roomScreenChanged };
