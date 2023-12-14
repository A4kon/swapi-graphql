import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType({
  description: 'The Planet type represents information about a celestial body.',
})
export class PlanetsModel {
  @Field(() => ID, { description: 'The unique identifier for the planet.' })
  id: number;

  @Field({ description: 'The name of the planet.' })
  name: string;

  @Field({
    description: 'The diameter of the planet in kilometers.',
  })
  diameter: string;

  @Field({
    description:
      'The number of standard hours it takes for the planet to complete a single rotation on its axis.',
  })
  rotation_period: string;

  @Field({
    description:
      'The number of standard days it takes for the planet to complete a single orbit of its local star.',
  })
  orbital_period: string;

  @Field({
    description:
      'A number denoting the gravity of the planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.',
  })
  gravity: string;

  @Field({
    description:
      'The average population of sentient beings inhabiting the planet.',
  })
  population: string;

  @Field({
    description: 'The climate of the planet. Comma separated if diverse.',
  })
  climate: string;

  @Field({
    description: 'The terrain of the planet. Comma separated if diverse.',
  })
  terrain: string;

  @Field({
    description:
      'The percentage of the planet surface that is naturally occurring water or bodies of water.',
  })
  surface_water: string;

  @Field(() => [String], {
    description: 'An array of People URL Resources that live on this planet.',
  })
  residents: string[];

  @Field(() => [String], {
    description:
      'An array of Film URL Resources that this planet has appeared in.',
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
