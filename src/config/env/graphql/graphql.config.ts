import { registerAs } from '@nestjs/config';
import { GraphqlConfigInterface } from './graphql.config.interface';

export default registerAs<GraphqlConfigInterface>('graphql', () => ({
  debug: process.env['ENV'] == 'development',
  playground: process.env['ENV'] == 'development',
}));
