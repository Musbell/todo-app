import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Todo as TodoModel } from '@prisma/client';
import { TodosService } from './todos.service';
import { OrderByParams } from '../graphql';
import { TodoCreateInput } from '../@generated/prisma-nestjs-graphql/todo/todo-create.input';
import { TodoUpdateInput } from '../@generated/prisma-nestjs-graphql/todo/todo-update.input';

@Resolver('Todo')
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Mutation('createTodo')
  create(
    @Args('createTodoInput') createTodoInput: TodoCreateInput,
  ): Promise<TodoModel> {
    return this.todosService.create(createTodoInput);
  }

  @Query('todos')
  findAll(@Args('orderBy') orderBy?: OrderByParams): Promise<TodoModel[]> {
    return this.todosService.findAll(orderBy);
  }

  @Query('todo')
  findOne(@Args('id') id: number): Promise<TodoModel> {
    return this.todosService.findOne({ id });
  }

  @Mutation('updateTodo')
  update(
    @Args('updateTodoInput') updateTodoInput: TodoUpdateInput,
    @Args('id') id: number,
  ): Promise<TodoModel> {
    return this.todosService.update({ where: { id }, data: updateTodoInput });
  }

  @Mutation('removeTodo')
  remove(@Args('id') id: number): Promise<TodoModel> {
    return this.todosService.remove({ id });
  }
}
