import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CacheModule } from '@nestjs/cache-manager';
import { PeopleService } from './people.service';
import { PeopleResolver } from './people.resolver';

@Module({
  // TODO: use redis
  imports: [CacheModule.register()],
  providers: [PrismaService, PeopleResolver, PeopleService],
})
export class PeopleModule {}
