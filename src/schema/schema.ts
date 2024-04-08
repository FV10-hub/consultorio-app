import { z } from 'zod'

export const SearchSchema = z.object({
    search: z.string()
                .trim()
                .min(1, {message: 'La búsqueda no puede ir vacia'})
})