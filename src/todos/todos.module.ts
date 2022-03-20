import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosResolver } from './todos.resolver';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [PrismaService, TodosResolver, TodosService],
})
export class TodosModule {}