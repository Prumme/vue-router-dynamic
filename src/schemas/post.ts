import { z } from 'zod';

// on définit le schéma de données pour les posts
export const postsSchema = z.object({
    userId: z.number().positive(),
    id: z.number().positive(),
    title: z.string(),
    body: z.string()

}).array();


// on définit le schéma de données pour un post
export const postSchema = z.object({
    userId: z.number().positive(),
    id: z.number().positive(),
    title: z.string(),
    body: z.string()

})