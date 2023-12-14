import { Args, Query, Resolver } from '@nestjs/graphql';
import { PeopleModel } from './people.model';
import { ListPeopleInput } from './people.input';
import { PeopleService } from './people.service';

@Resolver()
export class PeopleResolver {
  constructor(private readonly peopleService: PeopleService) {}

  @Query(() => [PeopleModel])
  async fetchPaginatedPeople(
    @Args('data') data: ListPeopleInput,
  ): Promise<PeopleModel[]> {
    return await this.peopleService.fetchPaginatedPeople(data);
  }

  @Query(() => PeopleModel)
  async getPersonById(@Args('id') id: number): Promise<PeopleModel> {
    return await this.peopleService.getPersonById(id);
  }
}
