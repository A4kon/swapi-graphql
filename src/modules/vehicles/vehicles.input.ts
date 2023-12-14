import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';
import { PaginationInput } from 'src/common/input/pagination.input';

@InputType()
export class ListVehiclesInputFieldsArguments {
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
export class ListVehiclesInput extends PaginationInput {
  @Field(() => String, { nullable: true })
  cursor?: Prisma.VehiclesWhereUniqueInput;
  @Field(() => ListVehiclesInputFieldsArguments, { nullable: true })
  where?: ListVehiclesInputFieldsArguments;
}
