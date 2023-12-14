import { PrismaService } from 'src/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { DAY_IN_MS } from 'src/config/const';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { ListPlanetsInput } from './planets.input';

@Injectable()
export class PlanetsService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  async fetchPaginatedPlanets(params: ListPlanetsInput) {
    const { skip, take, cursor, where } = params;

    return await this.prisma.planets.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }
  async getFilmById(id: number) {
    const existsInCache = await this.cacheManager.get<string>(`p-${id}`);
    if (existsInCache) {
      return JSON.parse(existsInCache);
    }
    const data = await this.prisma.planets.findUnique({
      where: {
        id,
      },
    });

    this.cacheManager.set(`p-${id}`, JSON.stringify(data), DAY_IN_MS);
    return data;
  }
}
