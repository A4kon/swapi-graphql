import { Field, Int } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

export class PaginationInput {
  @IsNumber()
  @Field(() => Int, { nullable: false })
  skip: number;
  @IsNumber()
  @Field(() => Int, { nullable: false })
  take: number;
}
