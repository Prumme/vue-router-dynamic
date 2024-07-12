import { todoSchema, todosSchema } from "@/schemas/todo";
import type { ZodSchema } from "zod";

export default class TodoClass {
    name: string = 'Todo';

    fetchingRoute: string = 'todos';
    schema: ZodSchema = todosSchema
    route: string = '/todos';

    assosiatedClasses: Array<{key: string, link: string}> = [
        {key: 'userId', link: '/users/'}
    ];

    constructor(id?: number) {
        if (id) {
            this.fetchingRoute += `/${id}`;
            this.schema = todoSchema;
        }  
    }
}