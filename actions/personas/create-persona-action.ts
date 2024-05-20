"use server";

import { prisma } from "@/src/lib/prisma";
import { PersonaSchema } from "@/src/schema/schema";
import { revalidatePath } from "next/cache";

export async function createPersona(data: unknown) {
  const result = PersonaSchema.safeParse(data);
  if (!result.success) {
    return {
      errors: ["No se guardo, ingrese bien los datos"],
    };
  }
  try {
    let personaSaved = await prisma.persona.create({
      data: { ...result.data, email: "" },
    });
    await prisma.ficha.create({
      data: {
        tipo_seguro: "NUEVO",
        personaId: personaSaved.id,
        consultas: {
          create: [],
        },
      },
    });
    revalidatePath("/personas");
  } catch (error) {
    return {
      errors: ["No se pudo guardar verifica los datos"],
    };
  }
}
