import PersonaDetalle from "@/components/ui/PersonaDetalle";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";

async function getPersonas() {
  return await prisma.persona.findMany();
}

export default async function FichadPage() {
  const personas = await getPersonas();
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Personas</h2>
        <Link
          href="personas/nuevo"
          className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
        >
          Agregar Persona
        </Link>
      </div>
      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-2">Documento</th>
              <th className="p-2">Nombre Completo</th>
              <th className="p-2">Correo</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {personas.map((persona) => (
              <PersonaDetalle key={persona.id} persona={persona} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
