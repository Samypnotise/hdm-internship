"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_1 = require("@nestjs/apollo");
const graphql_1 = require("@nestjs/graphql");
exports.default = graphql_1.GraphQLModule.forRoot({
    autoSchemaFile: './schema.gql',
    sortSchema: true,
    driver: apollo_1.ApolloDriver,
    playground: process.env.GRAPHQL_PLAYGROUND_ENABLED === 'true',
    buildSchemaOptions: {
        dateScalarMode: 'isoDate',
    },
    installSubscriptionHandlers: true,
});
//# sourceMappingURL=GraphqlModule.js.map