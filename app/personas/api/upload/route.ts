import { promises as fsPromises } from "fs";
import { writeFile } from "fs/promises";
import { join } from "path";
import { NextRequest, NextResponse } from "next/server";
import { createGaleria } from "@/actions/personas/galeria/create-galeria-action";

const { mkdir } = fsPromises;

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;
  const idPersona: string = data.get("idPersona") as string;
  const descripcion: string = data.get("descripcion") as string;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filePath = join(
    process.cwd(),
    "public",
    "images",
    idPersona,
    file.name
  );

  // Crear los directorios necesarios si no existen
  try {
    await mkdir(join(process.cwd(), "public", "images", idPersona), {
      recursive: true,
    });
  } catch (error) {
    console.error("Error al crear los directorios:", error);
    return NextResponse.json({
      success: false,
      error: "Error al crear los directorios",
    });
  }

  // Escribir el archivo en el directorio
  try {
    await writeFile(filePath, buffer);
  } catch (error) {
    console.error("Error al escribir el archivo:", error);
    return NextResponse.json({
      success: false,
      error: "Error al escribir el archivo",
    });
  }

  const galeriaAInsertar = {
    personaId: idPersona,
    descripcion,
    url: filePath,
  };

  const inserted = createGaleria(galeriaAInsertar);
  console.log("EEN EL SERVIDOR SE GUARDO ? ", inserted !== null ? true : false);
  return NextResponse.json({ success: true });
}
