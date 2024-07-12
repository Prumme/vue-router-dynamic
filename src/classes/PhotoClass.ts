import { photoSchema, photosSchema } from "@/schemas/photo";
import type { ZodSchema } from "zod";

export default class PhotoClass {
    name: string = 'Photo';

    fetchingRoute: string = 'photos';
    schema: ZodSchema = photosSchema
    route: string = '/photos';

    assosiatedClasses: Array<{key: string, link: string}> = [
        {key: 'albumId', link: '/albums/'}
    ];

    constructor(id?: number) {
        if (id) {
            this.fetchingRoute += `/${id}`;
            this.schema = photoSchema;
        }  
    }
}