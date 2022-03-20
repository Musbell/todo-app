import { Injectable } from '@nestjs/common';
import { Prisma, Todo } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { OrderByParams } from '../graphql';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}
  create(data: Prisma.TodoCreateInput) {
    return this.prisma.todo.create({
      data,
    });
  }

  findAll(orderBy?: OrderByParams): Promise<Todo[]> {
    const { field = 'createdAt', direction = 'desc' } = orderBy || {};
    return this.prisma.todo.findMany({
      orderBy: { [field]: direction },
    });
  }

  findOne(
    todoWhereUniqueInput: Prisma.TodoWhereUniqueInput,
  ): Promise<Todo | null> {
    return this.prisma.todo.findUnique({
      where: todoWhereUniqueInput,
    });
  }

  update(params: {
    where: Prisma.TodoWhereUniqueInput;
    data: Prisma.TodoUpdateInput;
  }): Promise<Todo> {
    const { where, data } = params;
    return this.prisma.todo.update({
      data,
      where,
    });
  }

  remove(todoDeleteInput: Prisma.TodoWhereUniqueInput): Promise<Todo> {
    return this.prisma.todo.delete({
      where: todoDeleteInput,
    });
  }
}
