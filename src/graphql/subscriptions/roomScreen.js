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

  // todo: find a better way to search the collection looking at the room name.
  subscribe: withFilter(
    (rootValue, args, { pubsub }) => pubsub.asyncIterator('roomScreenChanged'),
    (payload, variables) => variables.roomName === payload[0].scheduledRoom,
  ),
};

// eslint-disable-next-line
export { roomScreenChanged };
