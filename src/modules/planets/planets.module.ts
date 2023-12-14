import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CacheModule } from '@nestjs/cache-manager';
import { PlanetsService } from './planets.service';
import { PlanetsResolver } from './planets.resolver';

@Module({
  // TODO: use redis
  imports: [CacheModule.register()],
  providers: [PrismaService, PlanetsResolver, PlanetsService],
})
export class PlanetsModule {}
