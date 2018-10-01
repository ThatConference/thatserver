import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } from 'graphql';

const deviceHealth = new GraphQLObjectType({
  name: 'DeviceHealth',
  description: 'Device Health Stats',
  fields: () => ({
    published_at: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'TBD',
    },
    coreid: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'TBD',
    },
    data: {
      description: 'Payload Data',
      type: new GraphQLObjectType({
        name: 'Data',
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
                      signal: {
                        type: new GraphQLObjectType({
                          name: 'Signal',
                          fields: () => ({
                            strength: {
                              type: GraphQLString,
                            },
                            quality: {
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
      }),
    },
  }),
});

export default deviceHealth;
