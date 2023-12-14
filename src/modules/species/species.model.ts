import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({
  description:
    'The Species type represents information about a species in the Star Wars universe.',
})
export class SpeciesModel {
  @Field(() => ID, { description: 'The unique identifier for the species.' })
  id: number;

  @Field({ description: 'The name of the species.' })
  name: string;

  @Field({
    description:
      'The classification of the species, such as "mammal" or "reptile".',
  })
  classification: string;

  @Field({ description: 'The designation of the species, such as "sentient".' })
  designation: string;

  @Field({
    description: 'The average height of the species in centimeters.',
  })
  average_height: string;

  @Field({
    description: 'The average lifespan of the species in years.',
  })
  average_lifespan: string;

  @Field({
    description:
      'A comma-separated string of common eye colors for the species, "none" if the species does not typically have eyes.',
  })
  eye_colors: string;

  @Field({
    description:
      'A comma-separated string of common hair colors for the species, "none" if the species does not typically have hair.',
  })
  hair_colors: string;

  @Field({
    description:
      'A comma-separated string of common skin colors for the species, "none" if the species does not typically have skin.',
  })
  skin_colors: string;

  @Field({
    description: 'The language commonly spoken by the species.',
  })
  language: string;

  @Field({
    description:
      'The URL of a planet resource, a planet that this species originates from.',
  })
  homeworld: string;

  @Field(() => [String], {
    description:
      'An array of People URL Resources that are a part of this species.',
  })
  people: string[];

  @Field(() => [String], {
    description:
      'An array of Film URL Resources that this species has appeared in.',
  })
  films: string[];

  @Field({
    description: 'The hypermedia URL of this resource.',
  })
  url: string;

  @Field({
    description:
      'The date string format of the time that this resource was created.',
  })
  created: string;

  @Field({
    description:
      'The date string format of the time that this resource was edited.',
  })
  edited: string;
}
