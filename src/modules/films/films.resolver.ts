import { Args, Query, Resolver } from '@nestjs/graphql';
import { FilmOpeningsWordStats, FilmsModel } from './films.model';
import { ListFilmsInput } from './films.input';
import { FilmsService } from './films.service';

@Resolver()
export class FilmsResolver {
  constructor(private readonly filmsService: FilmsService) {}

  @Query(() => [FilmsModel])
  async updateCustomer(
    @Args('data') data: ListFilmsInput,
  ): Promise<FilmsModel[]> {
    return await this.filmsService.fetchPaginatedFilms(data);
  }

  @Query(() => FilmsModel)
  async getFilmById(@Args('id') id: number): Promise<FilmsModel> {
    return await this.filmsService.getFilmById(id);
  }
  @Query(() => [FilmOpeningsWordStats])
  async getFilmOpeningsWordStats(): Promise<FilmOpeningsWordStats[]> {
    return await this.filmsService.getFilmOpeningsWordStats();
  }
}
