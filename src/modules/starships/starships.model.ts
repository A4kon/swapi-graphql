import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({
  description:
    'The Starship type represents information about a starship in the Star Wars universe.',
})
export class StarshipsModel {
  @Field(() => ID, { description: 'The unique identifier for the starship.' })
  id: number;

  @Field({
    description:
      'The name of the starship. The common name, such as "Death Star".',
  })
  name: string;

  @Field({
    description:
      'The model or official name of the starship. Such as "T-65 X-wing" or "DS-1 Orbital Battle Station".',
  })
  model: string;

  @Field({
    description:
      'The class of the starship, such as "Starfighter" or "Deep Space Mobile Battlestation".',
  })
  starship_class: string;

  @Field({
    description:
      'The manufacturer of the starship. Comma separated if more than one.',
  })
  manufacturer: string;

  @Field({ description: 'The cost of the starship new, in galactic credits.' })
  cost_in_credits: string;

  @Field({ description: 'The length of the starship in meters.' })
  length: string;

  @Field({
    description: 'The number of personnel needed to run or pilot the starship.',
  })
  crew: string;

  @Field({
    description:
      'The number of non-essential people the starship can transport.',
  })
  passengers: string;

  @Field({
    description:
      'The maximum speed of the starship in the atmosphere. "N/A" if the starship is incapable of atmospheric flight.',
  })
  max_atmosphering_speed: string;

  @Field({ description: "The class of the starship's hyperdrive." })
  hyperdrive_rating: string;

  @Field({
    description:
      'The Maximum number of Megalights this starship can travel in a standard hour.',
  })
  MGLT: string;

  @Field({
    description:
      'The maximum number of kilograms that this starship can transport.',
  })
  cargo_capacity: string;

  @Field({
    description:
      'The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.',
    nullable: true,
  })
  consumables: string;

  @Field(() => [String], {
    description:
      'An array of Film URL Resources that this starship has appeared in.',
  })
  films: string[];

  @Field(() => [String], {
    description:
      'An array of People URL Resources that this starship has been piloted by.',
  })
  pilots: string[];

  @Field({ description: 'The hypermedia URL of this resource.' })
  url: string;

  @Field({
    description:
      'The ISO 8601 date format of the time that this resource was created.',
  })
  created: string;

  @Field({
    description:
      'The ISO 8601 date format of the time that this resource was edited.',
  })
  edited: string;
}
