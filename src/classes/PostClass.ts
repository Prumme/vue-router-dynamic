import { postSchema, postsSchema } from "@/schemas/post";
import type { ZodSchema } from "zod";

export default class PostClass {
    name: string = 'Post';

    fetchingRoute: string = 'posts';
    schema: ZodSchema = postsSchema
    route: string = '/posts';

    assosiatedClasses: Array<{key: string, link: string}> = [
        {key: 'userId', link: '/users/'}
    ];

    constructor(id?: number) {
        if (id) {
            this.fetchingRoute += `/${id}`;
            this.schema = postSchema;
        }  
    }
}