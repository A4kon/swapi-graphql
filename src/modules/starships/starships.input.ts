import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';
import { PaginationInput } from 'src/common/input/pagination.input';

@InputType()
export class ListStarshipsInputFieldsArguments {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  name?: string;
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  model?: string;
}

@InputType()
export class ListStarshipsInput extends PaginationInput {
  @Field(() => String, { nullable: true })
  cursor?: Prisma.StarshipsWhereUniqueInput;
  @Field(() => ListStarshipsInputFieldsArguments, { nullable: true })
  where?: ListStarshipsInputFieldsArguments;
}
