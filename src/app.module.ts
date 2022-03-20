import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { TodosModule } from './todos/todos.module';
import { PrismaService } from '../prisma/prisma.service';
import { GraphQLDateTime } from 'graphql-iso-date';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: true,
      typePaths: ['./**/*.graphql'],
      resolvers: { DateTime: GraphQLDateTime },
    }),
    TodosModule,
  ],
})
export class AppModule {}
