import { FichasWithPersonas } from "@/app/fichas/page";
import { Ficha } from "@prisma/client";
import Link from "next/link";
import { fichas } from '../../prisma/data/ficha';
import { personas } from '../../prisma/data/personas';

type FichaProps = {
  ficha: {
    persona: {
      id: number;
      createdAt: Date;
      updatedAt: Date;
      nombre_completo: string | null;
      documento: string;
      email: string;
      password: string | null;
      esDoctor: boolean;
      esUsuario: boolean;
      esPaciente: boolean;
    };
  } & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    personaId: number;
  };
};


export default function FichaDetalle({ ficha }: FichaProps) {
  return (
    <>
      <tr className="border-b ">
        <td className="p-3 text-lg text-gray-800">{ficha.persona.documento}</td>
        <td className="p-3 text-lg text-gray-800">{ficha.persona.nombre_completo}</td>
        <td className="p-3 text-lg text-gray-800 ">
                <div className="flex gap-2 items-center">
                    <Link
                        href={`especialidades/${ficha.id}/editar`}
                        className='bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'
                    >ver ficha</Link>
                </div>
            </td>
      </tr>
    </>
  );
}
