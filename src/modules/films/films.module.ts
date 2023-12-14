import { Module } from '@nestjs/common';
import { FilmsResolver } from './films.resolver';
import { PrismaService } from 'src/prisma.service';
import { FilmsService } from './films.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  // TODO: use redis
  imports: [CacheModule.register()],
  providers: [PrismaService, FilmsResolver, FilmsService],
  exports: [FilmsService],
})
export class FilmsModule {}
