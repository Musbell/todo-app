import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TodoWhereInput {
  @Field(() => [TodoWhereInput], { nullable: true })
  AND?: Array<TodoWhereInput>;

  @Field(() => [TodoWhereInput], { nullable: true })
  OR?: Array<TodoWhereInput>;

  @Field(() => [TodoWhereInput], { nullable: true })
  NOT?: Array<TodoWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  title?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  description?: StringFilter;

  @Field(() => BoolNullableFilter, { nullable: true })
  completed?: BoolNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;
}
