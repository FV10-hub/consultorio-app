import { Persona } from "@prisma/client";
import Link from "next/link";

type PersonaProps = {
  persona: Persona;
};

export default function PersonaDetalle({ persona }: PersonaProps) {
  return (
    <>
      <tr className="border-b ">
        <td className="p-3 text-lg text-gray-800">{persona.documento}</td>
        <td className="p-3 text-lg text-gray-800">{persona.nombre_completo}</td>
        <td className="p-3 text-lg text-gray-800">{persona.email}</td>
        <td className="p-3 text-lg text-gray-800 ">
                <div className="flex gap-2 items-center">
                    <Link
                        href={`personas/${persona.id}/editar`}
                        className='bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'
                    >Editar</Link>
                </div>
            </td>
      </tr>
    </>
  );
}
