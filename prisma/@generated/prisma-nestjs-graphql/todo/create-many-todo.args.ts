import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoCreateManyInput } from './todo-create-many.input';

@ArgsType()
export class CreateManyTodoArgs {

    @Field(() => [TodoCreateManyInput], {nullable:false})
    data!: Array<TodoCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
