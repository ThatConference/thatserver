import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } from 'graphql';

const deviceHealth = new GraphQLObjectType({
  name: 'DeviceHealth',
  description: 'Device Health Stats',
  fields: () => ({
    device: {
      description: 'Device Information',
      type: new GraphQLObjectType({
        name: 'Device',
        description: 'Device Information',
        fields: () => ({
          network: {
            type: new GraphQLObjectType({
              name: 'Network',
              fields: () => ({
                connection: {
                  type: new GraphQLObjectType({
                    name: 'Connection',
                    fields: () => ({
                      status: {
                        type: GraphQLString,
                      },
                      error: {
                        type: GraphQLString,
                      },
                    }),
                  }),
                },
              }),
            }),
          },
        }),
      }),
    },
  }),
});

export default deviceHealth;
