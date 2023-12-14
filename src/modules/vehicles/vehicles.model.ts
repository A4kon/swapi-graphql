import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({
  description:
    'The Vehicle type represents information about a vehicle in the Star Wars universe.',
})
export class VehiclesModel {
  @Field(() => ID, { description: 'The unique identifier for the vehicle.' })
  id: number;

  @Field({
    description:
      'The name of the vehicle. The common name, such as "Sand Crawler" or "Speeder bike".',
  })
  name: string;

  @Field({
    description:
      'The model or official name of the vehicle. Such as "All-Terrain Attack Transport".',
  })
  model: string;

  @Field({
    description:
      'The class of the vehicle, such as "Wheeled" or "Repulsorcraft".',
  })
  vehicle_class: string;

  @Field({
    description:
      'The manufacturer of the vehicle. Comma separated if more than one.',
  })
  manufacturer: string;

  @Field({ description: 'The length of the vehicle in meters.' })
  length: string;

  @Field({ description: 'The cost of the vehicle new, in Galactic Credits.' })
  cost_in_credits: string;

  @Field({
    description: 'The number of personnel needed to run or pilot the vehicle.',
  })
  crew: string;

  @Field({
    description:
      'The number of non-essential people the vehicle can transport.',
  })
  passengers: string;

  @Field({ description: 'The maximum speed of the vehicle in the atmosphere.' })
  max_atmosphering_speed: string;

  @Field({
    description:
      'The maximum number of kilograms that this vehicle can transport.',
  })
  cargo_capacity: string;

  @Field({
    description:
      'The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.',
    nullable: true,
  })
  consumables: string;

  @Field(() => [String], {
    description:
      'An array of Film URL Resources that this vehicle has appeared in.',
  })
  films: string[];

  @Field(() => [String], {
    description:
      'An array of People URL Resources that this vehicle has been piloted by.',
  })
  pilots: string[];

  @Field({ description: 'The hypermedia URL of this resource.' })
  url: string;

  @Field({
    description:
      'The date string date format of the time that this resource was created.',
  })
  created: string;

  @Field({
    description:
      'The date string format of the time that this resource was edited.',
  })
  edited: string;
}
