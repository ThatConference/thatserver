import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';

import speakerType from './speakers';
import speakerResolver from '../resolvers/speakers';

const session = new GraphQLObjectType({
  name: 'Session',
  description: 'Session Information',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Session ID',
    },

    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Session Title',
    },

    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Session Description',
    },

    primaryCategory: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Session Primary Category',
    },

    primaryCategoryDisplayText: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Session Description',
    },

    secondaryCategory: {
      type: GraphQLString,
      description: 'Session Description',
    },

    secondaryCategoryDisplayText: {
      type: GraphQLString,
      description: 'Session Description',
    },

    level: {
      type: GraphQLInt,
      description: 'Session Description',
    },

    scheduledDateTime: {
      type: GraphQLString,
      description: 'Session Description',
    },

    scheduledRoom: {
      type: GraphQLString,
      description: 'Session Description',
    },

    sessionDuration: {
      type: GraphQLInt,
      description: 'Session Duration',
    },

    isFamilyApproved: {
      type: GraphQLBoolean,
      description: 'Session Description',
    },

    canceled: {
      type: GraphQLBoolean,
      description: 'Session Description',
    },

    speakers: {
      type: new GraphQLList(speakerType),
      description: 'Session Description',
      resolve: (...args) => speakerResolver(...args),
    },

    tags: {
      type: new GraphQLList(GraphQLString),
      description: 'Session Description',
    },

    sessionLinks: {
      type: new GraphQLList(GraphQLString),
      description: 'Session Description',
    },

    lastUpdated: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Session Description',
    },

    updated: {
      type: GraphQLString,
      description: 'Session Description',
    },

    showMoreDetails: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Session Description',
    },

    descriptionHtml: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Session Description',
    },

    descriptionHtmlTruncated: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Session Description',
    },
  }),
});

export default session;
