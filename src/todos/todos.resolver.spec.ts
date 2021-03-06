import { Test, TestingModule } from '@nestjs/testing';
import { TodosResolver } from './todos.resolver';
import { TodosService } from './todos.service';
import { PrismaService } from '../../prisma/prisma.service';

describe('TodosResolver', () => {
  let resolver: TodosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosResolver, TodosService, PrismaService],
    }).compile();

    resolver = module.get<TodosResolver>(TodosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
