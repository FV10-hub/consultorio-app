import PersonaDetalle from "@/components/ui/PersonaDetalle";
import { prisma } from "@/src/lib/prisma";

async function getPersonas(page: number, pageSize: number) {
  const skipPage = (page - 1) * pageSize
  return await prisma.persona.findMany({
    take: pageSize,
    skip: skipPage
  });
}

export default async function PersonaPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  
  const page = +searchParams.page || 1;
  const pageSize = 5;
  const personas = await getPersonas(page, pageSize);
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 mt-20">
        <div className="mt-8 flow-root ">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-white p-5 ">
              <table className="min-w-full divide-y divide-gray-300 ">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Documento
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Nombre Completo
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Correo
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Acciones</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {personas.map((persona) => (
                    <PersonaDetalle key={persona.id} persona={persona} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
