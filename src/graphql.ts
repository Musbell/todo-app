/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateTodoInput {
    title: string;
    description?: Nullable<string>;
    completed: boolean;
}

export class UpdateTodoInput {
    id?: Nullable<number>;
    title: string;
    description?: Nullable<string>;
    completed: boolean;
}

export class OrderByParams {
    field: string;
    direction: string;
}

export class Todo {
    id: number;
    title: string;
    description?: Nullable<string>;
    completed: boolean;
    createdAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract todos(orderBy?: Nullable<OrderByParams>): Nullable<Todo>[] | Promise<Nullable<Todo>[]>;

    abstract todo(id: number): Nullable<Todo> | Promise<Nullable<Todo>>;
}

export abstract class IMutation {
    abstract createTodo(createTodoInput: CreateTodoInput): Todo | Promise<Todo>;

    abstract updateTodo(id: number, updateTodoInput: UpdateTodoInput): Todo | Promise<Todo>;

    abstract removeTodo(id: number): Nullable<Todo> | Promise<Nullable<Todo>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
