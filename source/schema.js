import * as _ from 'lodash';
import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import events from './queries/events';
import parties from './queries/parties';
import sessions from './queries/sessions';

const queries = _.merge(events, parties, sessions);

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: queries,
  }),

  //   mutation: new GraphQLObjectType({
  //     name: 'Mutation',
  //     fields: mutations,
  //   }),
  // directive: new GraphQLObjectType({
  //   name: 'Directive',
  //   fields: directives
  // }),
  // subscription: new GraphQLObjectType({
  //   name: 'Subscription',
  //   fields: subscriptions
  // })
});
