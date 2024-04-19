import { getImagePath } from "@/src/utils";
import { Galeria } from "@prisma/client";
import Image from "next/image";

type GaleriaCardProps = {
  galeria: Galeria;
};

export default async function ImagenesCard({ galeria }: GaleriaCardProps) {
  return (
    <>
      <div className="border bg-white">
        <Image
          width={300}
          height={300}
          src={getImagePath(galeria.url!)}
          alt={`Imagen`}
        />

        <div className="p-5">
        <h3 className="text-sm font-bold">Descripcion</h3>
          <h3 className="mt-5 font-black text-sm text-amber-500">
            <p className="text-sm font-bold">{galeria.descripcion}</p>{" "}
          </h3>
        </div>
      </div>
    </>
  );
}
