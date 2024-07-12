import { commentSchema, commentsSchema } from "@/schemas/comment";
import type { ZodSchema } from "zod";

export default class CommentClass {
    name: string = 'Comment';

    fetchingRoute: string = 'comments';
    schema: ZodSchema = commentsSchema
    route: string = '/comments';

    assosiatedClasses: Array<{key: string, link: string}> = [
        {key: 'postId', link: '/posts/'}
    ];

    constructor(id?: number) {
        if (id) {
            this.fetchingRoute += `/${id}`;
            this.schema = commentSchema;
        }  
    }
}