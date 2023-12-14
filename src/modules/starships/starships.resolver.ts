import { Args, Query, Resolver } from '@nestjs/graphql';
import { StarshipsModel } from './starships.model';
import { ListStarshipsInput } from './starships.input';
import { StarshipsService } from './starships.service';

@Resolver()
export class StarshipsResolver {
  constructor(private readonly starshipsService: StarshipsService) {}

  @Query(() => [StarshipsModel])
  async fetchPaginatedStarships(
    @Args('data') data: ListStarshipsInput,
  ): Promise<StarshipsModel[]> {
    return await this.starshipsService.fetchPaginatedStarships(data);
  }

  @Query(() => StarshipsModel)
  async getStarshipById(@Args('id') id: number): Promise<StarshipsModel> {
    return await this.starshipsService.getStarshipById(id);
  }
}
