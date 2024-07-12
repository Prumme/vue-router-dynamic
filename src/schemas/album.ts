import { z } from 'zod';

// on définit le schéma de données pour les albums
export const albumsSchema = z.object({
    userId: z.number().positive(),
    id: z.number().positive(),
    title: z.string()

}).array();


// on définit le schéma de données pour un album
export const albumSchema = z.object({
    userId: z.number().positive(),
    id: z.number().positive(),
    title: z.string(),

})