import { z } from 'zod';

// on définit le schéma de données pour les commentaires
export const commentsSchema = z.object({
    postId: z.number().positive(),
    id: z.number().positive(),
    name: z.string(),
    email: z.string().email(),
    body: z.string()

}).array();


// on définit le schéma de données pour un commentaire
export const commentSchema = z.object({
    postId: z.number().positive(),
    id: z.number().positive(),
    name: z.string(),
    email: z.string().email(),
    body: z.string()

})