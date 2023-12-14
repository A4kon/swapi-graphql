import { Args, Query, Resolver } from '@nestjs/graphql';
import { PlanetsModel } from './planets.model';
import { ListPlanetsInput } from './planets.input';
import { PlanetsService } from './planets.service';

@Resolver()
export class PlanetsResolver {
  constructor(private readonly planetsService: PlanetsService) {}

  @Query(() => [PlanetsModel])
  async updateCustomer(
    @Args('data') data: ListPlanetsInput,
  ): Promise<PlanetsModel[]> {
    return await this.planetsService.fetchPaginatedPlanets(data);
  }

  @Query(() => PlanetsModel)
  async getFilmById(@Args('id') id: number): Promise<PlanetsModel> {
    return await this.planetsService.getFilmById(id);
  }
}
