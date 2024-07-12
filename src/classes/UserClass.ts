import { userSchema, usersSchema } from "@/schemas/user";
import type { ZodSchema } from "zod";

export default class UserClass {
    name: string = 'User';

    fetchingRoute: string = 'users';
    schema: ZodSchema = usersSchema
    route: string = '/users';

    assosiatedClasses: Array<{key: string, link: string}> = [];

    constructor(id?: number) {
        if (id) {
            this.fetchingRoute += `/${id}`;
            this.schema = userSchema;
        }  
    }
}