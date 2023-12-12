import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GqlConfigService } from './graphql.service';
import { ConfigModule } from '@nestjs/config';
import { GraphqlConfig } from '../env';

@Module({
  imports: [
    ConfigModule.forFeature(GraphqlConfig),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),
  ],
})
export class GraphQlModuleModule {}
