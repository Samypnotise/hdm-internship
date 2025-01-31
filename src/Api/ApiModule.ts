import { Module } from '@nestjs/common';
import CoreModule from 'src/Core/CoreModule';
import { Utils } from './Utils/Utils';
import { Repositories } from './Repository/Repositories';
import { Resolvers } from './Resolver/Resolvers';
import GraphqlModule from 'src/Core/GraphqlModule';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (config) => {
        if (!config.JWT_SECRET) {
          throw new Error('JWT_SECRET environment variable is missing.');
        }

        return config;
      },
    }),
    CoreModule,
    GraphqlModule,
  ],
  controllers: [],
  providers: [...Repositories, ...Resolvers, ...Utils],
})
export class ApiModule {}
