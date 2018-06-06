import { GraphQLString } from 'graphql';
import { withFilter } from 'graphql-subscriptions';

import logger from '../../utilities/logger';
import speakerStatusType from '../types/speakerStatus';

import buttons from '../../data/buttons';
// import * as deviceData from '../../data/devices';

const speakerStatusChanged = {
  type: speakerStatusType,
  description: 'Speaker Status Subscription',
  args: {
    roomName: {
      type: GraphQLString,
    },
  },

  // just kicking out the exact payload we got from things...
  resolve: payload => payload,

  subscribe: withFilter(
    (rootValue, args, { pubsub }) => pubsub.asyncIterator('speakerStatusChanged'),
    // variables is what the connection was setup with.
    // payload is the request
    async (payload, variables, { cache, db }) => {
      logger.trace(`Speaker Status Subscription, roomName: ${variables.roomName}`);

      // return all room status
      if (variables.roomName.toLowerCase() === 'all'.toLowerCase()) return true;

      // need to grab the current buttons to do the match...
      const buttonDevices = await buttons(cache, db);

      return (
        variables.roomName.toUpperCase() === buttonDevices[payload.coreid].roomName.toUpperCase()
      );
    },
  ),
};

// eslint-disable-next-line
export { speakerStatusChanged };
