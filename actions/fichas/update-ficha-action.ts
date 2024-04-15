"use server";

import { prisma } from "@/src/lib/prisma";
import { Ficha } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function updateFicha(data: Ficha, idFicha: number): Promise<boolean> {
  const { id, updatedAt, tipo_seguro, ...restData } = data;

  try {
    await prisma.ficha.update({
      where: { id: idFicha },
      data: {
        updatedAt,
        tipo_seguro, // Actualiza el campo tipo_seguro
        ...restData, // Otros campos de actualización (si los hay)
      },
    });
    console.log(`Tipo de seguro actualizado para la ficha con ID ${id}`);
    return true;
  } catch (error) {
    console.error("Error al actualizar la ficha:", error);
    return false;
  }
}
