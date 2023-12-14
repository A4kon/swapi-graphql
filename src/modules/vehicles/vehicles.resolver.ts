import { Args, Query, Resolver } from '@nestjs/graphql';
import { VehiclesModel } from './vehicles.model';
import { ListVehiclesInput } from './vehicles.input';
import { VehiclesService } from './vehicles.service';

@Resolver()
export class VehiclesResolver {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Query(() => [VehiclesModel])
  async fetchPaginatedVehicles(
    @Args('data') data: ListVehiclesInput,
  ): Promise<VehiclesModel[]> {
    return await this.vehiclesService.fetchPaginatedVehicles(data);
  }

  @Query(() => VehiclesModel)
  async getStarshipById(@Args('id') id: number): Promise<VehiclesModel> {
    return await this.vehiclesService.getStarshipById(id);
  }
}
