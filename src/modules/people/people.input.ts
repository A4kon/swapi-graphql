import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';
import { PaginationInput } from 'src/common/input/pagination.input';

@InputType()
export class ListPeopleInputFieldsArguments {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  name?: string;
}

@InputType()
export class ListPeopleInput extends PaginationInput {
  @Field(() => String, { nullable: true })
  cursor?: Prisma.PeopleWhereUniqueInput;
  @Field(() => ListPeopleInputFieldsArguments, { nullable: true })
  where?: ListPeopleInputFieldsArguments;
}
