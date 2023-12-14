import { PrismaService } from 'src/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { DAY_IN_MS } from 'src/config/const';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { ListSpeciesInput } from './species.input';

@Injectable()
export class SpeciesService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  async fetchPaginatedSpecies(params: ListSpeciesInput) {
    const { skip, take, cursor, where } = params;

    return await this.prisma.species.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }
  async getSpeciesById(id: number) {
    const existsInCache = await this.cacheManager.get<string>(`sp-${id}`);
    if (existsInCache) {
      return JSON.parse(existsInCache);
    }
    const data = await this.prisma.species.findUnique({
      where: {
        id,
      },
    });

    this.cacheManager.set(`sp-${id}`, JSON.stringify(data), DAY_IN_MS);
    return data;
  }
}
