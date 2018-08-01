import * as _ from 'lodash';
import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import * as roomQuery from './queries/rooms';
import * as buttonsQuery from './queries/buttons';
import * as speakersQuery from './queries/speakers';
import * as eventsQuery from './queries/events';
import * as sessionsQuery from './queries/sessions';

import * as roomScreenSubscription from './subscriptions/roomScreen';
import * as roomTempSubscription from './subscriptions/roomTemp';
import * as speakerStatusSubscription from './subscriptions/speakerStatus';
import * as deploymentSubscription from './subscriptions/deployment';

const queries = _.merge(roomQuery, buttonsQuery, speakersQuery, eventsQuery, sessionsQuery);

// eslint-disable-next-line
const subscriptions = _.merge(
  roomScreenSubscription,
  roomTempSubscription,
  speakerStatusSubscription,
  deploymentSubscription,
);

const graphSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'This is where you get all the awesome about the system.',
    fields: queries,
  }),

  subscription: new GraphQLObjectType({
    name: 'Subscription',
    fields: subscriptions,
  }),
});

export default graphSchema;
