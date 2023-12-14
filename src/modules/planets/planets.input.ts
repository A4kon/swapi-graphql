import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';
import { PaginationInput } from 'src/common/input/pagination.input';

@InputType()
export class ListPlanetsInputFieldsArguments {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  name?: string;
}

@InputType()
export class ListPlanetsInput extends PaginationInput {
  @Field(() => String, { nullable: true })
  cursor?: Prisma.PlanetsWhereUniqueInput;
  @Field(() => ListPlanetsInputFieldsArguments, { nullable: true })
  where?: ListPlanetsInputFieldsArguments;
}
