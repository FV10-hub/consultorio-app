"use server";

import { prisma } from "@/src/lib/prisma";
import { revalidatePath } from "next/cache";

type FichaToCreate = {
    tipo_seguro?: string;
    personaId: number;
    consultas: {
      hora_consulta: string;
      observacion: string;
      indicacion: string;
      receta: string;
      asistio: boolean;
    }[];
  };
  export async function createFicha(data: FichaToCreate) {
    try {
      const consultasFormatted = data.consultas.map(consulta => ({
        hora_consulta: consulta.hora_consulta,
        observacion: consulta.observacion,
        indicacion: consulta.indicacion,
        receta: consulta.receta,
        asistio: consulta.asistio,  // Convertir a booleano
      }));
  
      await prisma.ficha.create({
        data: {
          tipo_seguro: data.tipo_seguro,
          personaId: data.personaId,
          consultas: {
            create: consultasFormatted,
          },
        },
      });
      revalidatePath('/fichas')
      return true;
    } catch (error) {
      console.error("Error al crear la ficha:", error);
      return false;
    }
  }