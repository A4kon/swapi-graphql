import { Module } from '@nestjs/common';
import { ConfigurationModule } from './config/env/config.module';
import { GraphQlModuleModule } from './config/graphql/graphql.module';
import { PrismaService } from './prisma.service';
import { FilmsModule } from './modules/films/films.module';
import { PlanetsModule } from './modules/planets/planets.module';
import { StarshipsModule } from './modules/starships/starships.module';
import { SpeciesModule } from './modules/species/species.module';
import { VehiclesModule } from './modules/vehicles/vehicles.module';

@Module({
  imports: [
    ConfigurationModule,
    GraphQlModuleModule,
    FilmsModule,
    PlanetsModule,
    SpeciesModule,
    StarshipsModule,
    VehiclesModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
