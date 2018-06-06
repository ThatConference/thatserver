import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } from 'graphql';

const speaker = new GraphQLObjectType({
  name: 'Speaker',
  description: 'Speaker Details',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Speaker id.',
    },

    userName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'THAT Conference user id.',
    },

    eventId: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Event this speaker is associated too.',
    },

    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Speaker's first name.",
    },

    lastName: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Speaker's last name.",
    },

    title: {
      type: GraphQLString,
      description: 'Speaker professional job title.',
    },

    company: {
      type: GraphQLString,
      description: "Speaker's company.",
    },

    biography: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Speaker's biography.",
    },

    headShot: {
      type: GraphQLString,
      description: 'Link too the speakers picture.',
    },

    facebook: {
      type: GraphQLString,
      description: 'URL to their Facebook profile.',
    },

    twitter: {
      type: GraphQLString,
      description: 'URL to their Twitter handle.',
    },

    linkedIn: {
      type: GraphQLString,
      description: 'URL to their LinkedIn profile.',
    },

    webSite: {
      type: GraphQLString,
      description: 'Speakers WebSite.',
    },

    googlePlus: {
      type: GraphQLString,
      description: 'Google plus profile.',
    },

    githubProfile: {
      type: GraphQLString,
      description: 'URL to their Github profile.',
    },
  }),
});

export default speaker;
