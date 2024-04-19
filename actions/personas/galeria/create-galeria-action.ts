"use server";

import { prisma } from "@/src/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createGaleria(data: any) {
  try {
    const inserted = await prisma.galeria.create({
      data,
    });
    revalidatePath(`/personas/${data.personaId}/galeria`);
    return inserted;
  } catch (error) {
    return {
      errors: ["No se pudo guardar verifica los datos"],
    };
  }
}
