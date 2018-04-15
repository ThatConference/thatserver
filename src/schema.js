import * as _ from 'lodash';
import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import * as roomQuery from './queries/rooms';
import * as roomSubscription from './subscriptions/rooms';

const queries = _.merge(roomQuery);
const subscriptions = _.merge(roomSubscription);

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
