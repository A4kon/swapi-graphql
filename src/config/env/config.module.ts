import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphqlConfig, RedisConfig } from '.';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [RedisConfig, GraphqlConfig],
      isGlobal: true,
    }),
  ],
})
export class ConfigurationModule {}
