import { z } from 'zod';

// on définit le schéma de données pour les photos
export const photosSchema = z.object({
    albumId: z.number().positive(),
    id: z.number().positive(),
    title: z.string(),
    url: z.string().url(),
    thumbnailUrl: z.string().url()
}).array();

// on définit le schéma de données pour une photo
export const photoSchema = z.object({
    albumId: z.number().positive(),
    id: z.number().positive(),
    title: z.string(),
    url: z.string().url(),
    thumbnailUrl: z.string().url()
});