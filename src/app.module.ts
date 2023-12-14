import { Module } from '@nestjs/common';
import { ConfigurationModule } from './config/env/config.module';
import { GraphQlModuleModule } from './config/graphql/graphql.module';
import { PrismaService } from './prisma.service';
import { FilmsModule } from './modules/films/films.module';
import { PlanetsModule } from './modules/planets/planets.module';

@Module({
  imports: [
    ConfigurationModule,
    GraphQlModuleModule,
    FilmsModule,
    PlanetsModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
