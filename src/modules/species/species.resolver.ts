import { Args, Query, Resolver } from '@nestjs/graphql';
import { SpeciesModel } from './species.model';
import { ListSpeciesInput } from './species.input';
import { SpeciesService } from './species.service';

@Resolver()
export class SpeciesResolver {
  constructor(private readonly speciesService: SpeciesService) {}

  @Query(() => [SpeciesModel])
  async fetchPaginatedSpecies(
    @Args('data') data: ListSpeciesInput,
  ): Promise<SpeciesModel[]> {
    return await this.speciesService.fetchPaginatedSpecies(data);
  }

  @Query(() => SpeciesModel)
  async getSpeciesById(@Args('id') id: number): Promise<SpeciesModel> {
    return await this.speciesService.getSpeciesById(id);
  }
}
