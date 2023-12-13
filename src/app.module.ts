import { Module } from '@nestjs/common';
import { ConfigurationModule } from './config/env/config.module';
import { GraphQlModuleModule } from './config/graphql/graphql.module';
import { PrismaService } from './prisma.service';
import { FilmsModule } from './modules/films/films.module';

@Module({
  imports: [ConfigurationModule, GraphQlModuleModule, FilmsModule],
  providers: [PrismaService],
})
export class AppModule {}
