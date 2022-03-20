import { registerEnumType } from '@nestjs/graphql';

export enum TodoScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    completed = "completed",
    createdAt = "createdAt"
}


registerEnumType(TodoScalarFieldEnum, { name: 'TodoScalarFieldEnum', description: undefined })
