"use server"

import { prisma } from "@/src/lib/prisma"
import { PersonaSchema } from "@/src/schema/schema"


export async function createPersona(data: unknown) {
    const result = PersonaSchema.safeParse(data)
    
    if(!result.success) {
        return {
            errors: result.error.issues
        }
    }

    await prisma.persona.create({
        data: result.data
    })
}