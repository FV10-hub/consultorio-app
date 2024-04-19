"use server";

import { prisma } from "@/src/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createGaleria(data: any) {
  try {
    const inserted = await prisma.galeria.create({
      data
    });
    console.log("se inserto o no ? ", inserted.id)
    revalidatePath(`/personas/${data.idPersona}/galeria`);
    return inserted;
  } catch (error) {
    return {
      errors: ["No se pudo guardar verifica los datos"],
    };
  }
}
