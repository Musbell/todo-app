import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: true })
  title!: string | null;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => Boolean, { nullable: true })
  completed!: boolean | null;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;
}
