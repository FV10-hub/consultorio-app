import { prisma } from "@/src/lib/prisma";

async function getPaicnetes(){
  return await prisma.persona.findMany({
    where: {
      esPaciente: true,
    },
  });
}

export default async function FichadPage() {
  const pacientes = await getPaicnetes();
  return (
    <>
      
      <div className="p-2">
      <h1 className="text-4xl text-center font-black">Ficha de Pacientes</h1>
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-2">Documento</th>
              <th className="p-2">Nombre Paciente</th>
              <th className="p-2">Fecha</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </>
  );
}
