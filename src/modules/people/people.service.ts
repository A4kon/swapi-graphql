import { PrismaService } from 'src/prisma.service';
import { ListPeopleInput } from './people.input';
import { Inject, Injectable } from '@nestjs/common';
import { DAY_IN_MS } from 'src/config/const';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { FilmsService } from '../films/films.service';
import { countBy, max, keys, values, pickBy } from 'lodash';

@Injectable()
export class PeopleService {
  constructor(
    private readonly films: FilmsService,
    private readonly prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  async fetchPaginatedPeople(params: ListPeopleInput) {
    const { skip, take, cursor, where } = params;

    return await this.prisma.people.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }
  async getPersonById(id: number) {
    const existsInCache = await this.cacheManager.get<string>(`pl-${id}`);
    if (existsInCache) {
      return JSON.parse(existsInCache);
    }
    const data = await this.prisma.people.findUnique({
      where: {
        id,
      },
    });

    this.cacheManager.set(`pl-${id}`, JSON.stringify(data), DAY_IN_MS);
    return data;
  }
  async getMostFamousCharacterInOpeningCrawl() {
    const people = await this.prisma.people.findMany();
    const openingCrawlWords = await this.films.getAllWordsFromOpeningCrawl();
    const names = people.map((it) => it.name.toLowerCase());
    const nameCounts = countBy(openingCrawlWords, (name) =>
      names.includes(name) ? name : 'Unknown',
    );

    delete nameCounts['Unknown'];

    const maxCount = max(values(nameCounts));
    return keys(pickBy(nameCounts, (count) => count === maxCount)).toString();
  }
}
