import { z } from 'zod';

// on définit le schéma de données pour les utilisateurs
export const usersSchema = z.object({
    id: z.number().positive(),
    name: z.string(),
    username: z.string(),
    email: z.string().email(),
    address: z.object({
        street: z.string(),
        suite: z.string(),
        city: z.string(),
        zipcode: z.string(),
        geo: z.object({
            lat: z.string(),
            lng: z.string()
        })
    }),
    phone: z.string(),
    website: z.string(),
    company: z.object({
        name: z.string(),
        catchPhrase: z.string(),
        bs: z.string()
    })
}).array();


// on définit le schéma de données pour un utilisateur
export const userSchema = z.object({
    id: z.number().positive(),
    name: z.string(),
    username: z.string(),
    email: z.string().email(),
    address: z.object({
        street: z.string(),
        suite: z.string(),
        city: z.string(),
        zipcode: z.string(),
        geo: z.object({
            lat: z.string(),
            lng: z.string()
        })
    }),
    phone: z.string(),
    website: z.string(),
    company: z.object({
        name: z.string(),
        catchPhrase: z.string(),
        bs: z.string()
    })
})