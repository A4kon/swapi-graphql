import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({
  description:
    'The Person type represents information about a person in the Star Wars universe.',
})
export class PeopleModel {
  @Field(() => Int, { description: 'The unique identifier for the person.' })
  id: number;

  @Field({ description: 'The name of the person.' })
  name: string;

  @Field({
    description:
      'The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin.',
  })
  birth_year: string;

  @Field({
    description:
      'The eye color of this person. Will be "unknown" if not known or "n/a" if the person does not have an eye.',
  })
  eye_color: string;

  @Field({
    description:
      'The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.',
  })
  gender: string;

  @Field({
    description:
      'The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair.',
  })
  hair_color: string;

  @Field({ description: 'The height of the person in centimeters.' })
  height: string;

  @Field({ description: 'The mass of the person in kilograms.' })
  mass: string;

  @Field({ description: 'The skin color of this person.' })
  skin_color: string;

  @Field({
    description:
      'The URL of a planet resource, a planet that this person was born on or inhabits.',
  })
  homeworld: string;

  @Field(() => [String], {
    description: 'An array of film resource URLs that this person has been in.',
  })
  films: string[];

  @Field(() => [String], {
    description:
      'An array of species resource URLs that this person belongs to.',
  })
  species: string[];

  @Field(() => [String], {
    description:
      'An array of starship resource URLs that this person has piloted.',
  })
  starships: string[];

  @Field(() => [String], {
    description:
      'An array of vehicle resource URLs that this person has piloted.',
  })
  vehicles: string[];

  @Field({ description: 'The hypermedia URL of this resource.' })
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
