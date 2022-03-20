import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class TodoCreateManyInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  @Validator.MinLength(3)
  title?: string;

  @Field(() => String, { nullable: false })
  @Validator.MaxLength(150)
  description!: string;

  @Field(() => Boolean, { nullable: true })
  completed?: boolean;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
}
