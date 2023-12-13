import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType({ description: 'A Film resource is a single film.' })
export class FilmsModel {
  @Field(() => ID, {
    description: 'The ID of the film.',
  })
  id: number;

  @Field({
    description: 'The title of this film.',
  })
  title: string;

  @Field(() => Int, {
    description: 'The episode number of this film.',
  })
  episode_id: number;

  @Field({
    description: 'The opening paragraphs at the beginning of this film.',
  })
  opening_crawl: string;

  @Field({
    description: 'The name of the director of this film.',
  })
  director: string;

  @Field({
    description:
      'The name(s) of the producer(s) of this film. Comma separated.',
  })
  producer: string;

  @Field({
    description:
      'The string date format of film release at the original creator country.',
  })
  release_date: string;

  @Field(() => [String], {
    description: 'An array of species resource URLs that are in this film.',
  })
  species: string[];

  @Field(() => [String], {
    description: 'An array of starship resource URLs that are in this film.',
  })
  starships: string[];

  @Field(() => [String], {
    description: 'An array of vehicle resource URLs that are in this film.',
  })
  vehicles: string[];

  @Field(() => [String], {
    description: 'An array of people resource URLs that are in this film.',
  })
  characters: string[];

  @Field(() => [String], {
    description: 'An array of planet resource URLs that are in this film.',
  })
  planets: string[];

  @Field({
    description: 'The hypermedia URL of this resource.',
  })
  url: string;

  @Field({
    description:
      'The string date format of the time that this resource was created.',
  })
  created: string;

  @Field({
    description:
      'The string date format of the time that this resource was edited.',
  })
  edited: string;
}

@ObjectType()
export class FilmsModelWithPagination {
  @Field(() => [FilmsModel])
  films: FilmsModel[];
}
