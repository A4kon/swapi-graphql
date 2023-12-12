import { Module } from '@nestjs/common';
import { ConfigurationModule } from './config/env/config.module';
import { GraphQlModuleModule } from './config/graphql/graphql.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ConfigurationModule, GraphQlModuleModule],
  providers: [PrismaService],
})
export class AppModule {}
