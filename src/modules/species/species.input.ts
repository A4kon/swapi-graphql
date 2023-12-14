import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';
import { PaginationInput } from 'src/common/input/pagination.input';

@InputType()
export class ListSpeciesInputFieldsArguments {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  name?: string;
}

@InputType()
export class ListSpeciesInput extends PaginationInput {
  @Field(() => String, { nullable: true })
  cursor?: Prisma.SpeciesWhereUniqueInput;
  @Field(() => ListSpeciesInputFieldsArguments, { nullable: true })
  where?: ListSpeciesInputFieldsArguments;
}
