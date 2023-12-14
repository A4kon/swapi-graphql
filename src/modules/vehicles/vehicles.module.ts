import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CacheModule } from '@nestjs/cache-manager';
import { VehiclesService } from './vehicles.service';
import { VehiclesResolver } from './vehicles.resolver';

@Module({
  // TODO: use redis
  imports: [CacheModule.register()],
  providers: [PrismaService, VehiclesResolver, VehiclesService],
})
export class VehiclesModule {}
