import * as _ from 'lodash';
import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import * as roomQuery from './queries/rooms';

const queries = _.merge(roomQuery);
// const subscriptions = _.merge(events, parties, sessions);

const graphSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'This is where you gtet all the awesome about the system.',
    fields: queries,
  }),

  // subscription: new GraphQLObjectType({
  //   name: 'Subscription',
  //   fields: subscriptions,
  // }),
});

export default graphSchema;
