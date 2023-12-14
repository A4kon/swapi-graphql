import { PrismaService } from 'src/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { DAY_IN_MS } from 'src/config/const';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { ListVehiclesInput } from './vehicles.input';

@Injectable()
export class VehiclesService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  async fetchPaginatedVehicles(params: ListVehiclesInput) {
    const { skip, take, cursor, where } = params;

    return await this.prisma.vehicles.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }
  async getStarshipById(id: number) {
    const existsInCache = await this.cacheManager.get<string>(`sp-${id}`);
    if (existsInCache) {
      return JSON.parse(existsInCache);
    }
    const data = await this.prisma.vehicles.findUnique({
      where: {
        id,
      },
    });

    this.cacheManager.set(`sp-${id}`, JSON.stringify(data), DAY_IN_MS);
    return data;
  }
}
