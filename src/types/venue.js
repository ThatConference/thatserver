import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const location = new GraphQLObjectType({
  name: 'Venue',
  description: 'Venues, Resorts, Colleges, aka Locations',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Location Name',
    },
    addressLineOne: {
      type: GraphQLString,
      description: 'Address line 1.',
    },
    addressLineTwo: {
      type: GraphQLString,
      description: 'Address line 2.',
    },
    city: {
      type: GraphQLString,
      description: 'City',
    },
    state: {
      type: GraphQLString,
      description: 'State',
    },
    zip: {
      type: GraphQLString,
      description: 'Zip Code',
    },
  }),
});

export default location;
