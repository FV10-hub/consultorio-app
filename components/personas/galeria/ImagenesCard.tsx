import { prisma } from "@/src/lib/prisma";
import { headers } from "next/headers";
import Image from "next/image";

async function getImegenesPorPersona(id: string) {
  const imagenes = await prisma.galeria.findMany({
    where: {
      personaId: +id,
    },
  });
  return imagenes;
}

export default async function ImagenesCard() {
  const heads = headers();
  const pathname = heads.get("next-url") || "no_hay";
  const match = pathname.match(/\/(\d+)\/galeria/);
  const idPersona = match ? match[1] : "1";
  const imagenes = await getImegenesPorPersona(idPersona);
  return (
    <>
      {imagenes.map((galeria) => {
        <div className="border bg-white">
          <Image
            width={400}
            height={500}
            src={galeria.url || ""}
            alt={`Imagen ${galeria.id}`}
          />

          <div className="p-5">
            <h3 className="text-2xl font-bold">{galeria.descripcion}</h3>
            <p className="mt-5 font-black text-4xl text-amber-500">HOLA</p>
          </div>
        </div>;
      })}
    </>
  );
}
