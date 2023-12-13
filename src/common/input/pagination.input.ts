import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@InputType()
export class PaginationInput {
  @IsNumber()
  @Field(() => Int, { nullable: false })
  skip: number;
  @IsNumber()
  @Field(() => Int, { nullable: false })
  take: number;
}
