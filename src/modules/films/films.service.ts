import { PrismaService } from 'src/prisma.service';
import { ListFilmsInput } from './films.input';
import { Inject, Injectable } from '@nestjs/common';
import { DAY_IN_MS } from 'src/config/const';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { words, toLower, countBy, map } from 'lodash';
import { FilmOpeningsWordStats } from './films.model';

@Injectable()
export class FilmsService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  async fetchPaginatedFilms(params: ListFilmsInput) {
    const { skip, take, cursor, where } = params;

    return await this.prisma.films.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }
  async getFilmById(id: number) {
    const existsInCache = await this.cacheManager.get<string>(`f-${id}`);
    if (existsInCache) {
      return JSON.parse(existsInCache);
    }
    const data = await this.prisma.films.findUnique({
      where: {
        id,
      },
    });

    this.cacheManager.set(`f-${id}`, JSON.stringify(data), DAY_IN_MS);
    return data;
  }

  async getFilmOpeningsWordStats() {
    const films = await this.prisma.films.findMany();
    let txt = '';
    for (const film of films) {
      txt += film.opening_crawl;
    }

    const wordList = words(toLower(txt));
    const wordCounts = countBy(wordList);
    const uniqueWordsWithCount = map(wordCounts, (count, word) => ({
      word,
      count,
    }));

    return uniqueWordsWithCount as FilmOpeningsWordStats[];
  }
}
