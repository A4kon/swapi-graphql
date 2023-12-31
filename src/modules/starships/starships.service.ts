import { PrismaService } from 'src/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { DAY_IN_MS } from 'src/config/const';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { ListStarshipsInput } from './starships.input';

@Injectable()
export class StarshipsService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  async fetchPaginatedStarships(params: ListStarshipsInput) {
    const { skip, take, cursor, where } = params;

    return await this.prisma.starships.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }
  async getStarshipById(id: number) {
    const existsInCache = await this.cacheManager.get<string>(`st-${id}`);
    if (existsInCache) {
      return JSON.parse(existsInCache);
    }
    const data = await this.prisma.starships.findUnique({
      where: {
        id,
      },
    });

    this.cacheManager.set(`st-${id}`, JSON.stringify(data), DAY_IN_MS);
    return data;
  }
}
