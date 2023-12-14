import { Args, Query, Resolver } from '@nestjs/graphql';
import { PlanetsModel } from './planets.model';
import { ListPlanetsInput } from './planets.input';
import { PlanetsService } from './planets.service';

@Resolver()
export class PlanetsResolver {
  constructor(private readonly planetsService: PlanetsService) {}

  @Query(() => [PlanetsModel])
  async fetchPaginatedPlanets(
    @Args('data') data: ListPlanetsInput,
  ): Promise<PlanetsModel[]> {
    return await this.planetsService.fetchPaginatedPlanets(data);
  }

  @Query(() => PlanetsModel)
  async getPlanetById(@Args('id') id: number): Promise<PlanetsModel> {
    return await this.planetsService.getPlanetById(id);
  }
}
