import { z } from 'zod';

// on définit le schéma de données pour les todos
export const todosSchema = z.object({
    userId: z.number().positive(),
    id: z.number().positive(),
    title: z.string(),
    completed: z.boolean()
}).array();

// on définit le schéma de données pour un todo
export const todoSchema = z.object({
    userId: z.number().positive(),
    id: z.number().positive(),
    title: z.string(),
    completed: z.boolean()
});