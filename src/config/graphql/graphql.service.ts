import { ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { GraphqlConfigInterface } from '../env/graphql/graphql.config.interface';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor(private configService: ConfigService) {}
  createGqlOptions(): ApolloDriverConfig {
    const graphqlConfig =
      this.configService.get<GraphqlConfigInterface>('graphql');
    return {
      autoSchemaFile: './schema.graphql',
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
      installSubscriptionHandlers: true,
      playground: graphqlConfig.playground,
    };
  }
}
