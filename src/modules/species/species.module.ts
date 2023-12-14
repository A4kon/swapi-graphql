import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CacheModule } from '@nestjs/cache-manager';
import { SpeciesService } from './species.service';
import { SpeciesResolver } from './species.resolver';

@Module({
  // TODO: use redis
  imports: [CacheModule.register()],
  providers: [PrismaService, SpeciesResolver, SpeciesService],
})
export class SpeciesModule {}
