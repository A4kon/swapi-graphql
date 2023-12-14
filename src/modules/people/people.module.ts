import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CacheModule } from '@nestjs/cache-manager';
import { PeopleService } from './people.service';
import { PeopleResolver } from './people.resolver';
import { FilmsModule } from '../films/films.module';

@Module({
  // TODO: use redis
  imports: [CacheModule.register(), FilmsModule],
  providers: [PrismaService, PeopleResolver, PeopleService],
})
export class PeopleModule {}
