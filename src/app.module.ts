import { Module } from '@nestjs/common';
import { ConfigurationModule } from './config/env/config.module';
import { GraphQlModuleModule } from './config/graphql/graphql.module';
import { PrismaService } from './prisma.service';
import { AppResolver } from './app.resolver';

@Module({
  imports: [ConfigurationModule, GraphQlModuleModule],
  providers: [PrismaService, AppResolver],
})
export class AppModule {}
