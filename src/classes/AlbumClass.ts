import { albumSchema, albumsSchema } from "@/schemas/album";
import type { ZodSchema } from "zod";

export default class AlbumClass {
    name: string = 'Album';

    fetchingRoute: string = 'albums';
    schema: ZodSchema = albumsSchema
    route: string = '/albums';

    assosiatedClasses: Array<{key: string, link: string}> = [
        {key: 'userId', link: '/users/'}
    ];

    constructor(id?: number) {
        if (id) {
            this.fetchingRoute += `/${id}`;
            this.schema = albumSchema;
        }  
    }
}