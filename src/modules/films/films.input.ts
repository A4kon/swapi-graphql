import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';
import { PaginationInput } from 'src/common/input/pagination.input';

@InputType()
export class ListFilmsInputFieldsArguments {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  title?: string;
}

@InputType()
export class ListFilmsInput extends PaginationInput {
  @Field(() => String, { nullable: true })
  cursor?: Prisma.FilmsWhereUniqueInput;
  @Field(() => ListFilmsInputFieldsArguments, { nullable: true })
  where?: ListFilmsInputFieldsArguments;
}
