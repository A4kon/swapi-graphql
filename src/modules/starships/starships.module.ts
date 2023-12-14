import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CacheModule } from '@nestjs/cache-manager';
import { StarshipsService } from './starships.service';
import { StarshipsResolver } from './starships.resolver';

@Module({
  // TODO: use redis
  imports: [CacheModule.register()],
  providers: [PrismaService, StarshipsResolver, StarshipsService],
})
export class StarshipsModule {}
