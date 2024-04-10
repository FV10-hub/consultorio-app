import { Especialidades, Ficha } from "@prisma/client";

type EspecialidadProps = {
  ficha?: Ficha;
};
export default async function FichaForms({ ficha }: EspecialidadProps) {
  return (
    <>
      <div className="border-b border-gray-900/10 pb-12 ">
        <div className="flex flex-col lg:flex-row lg:justify-end gap-5">
          <input
            type="submit"
            className="bg-green-500 hover:bg-green-600 rounded-lg text-white mt-5 p-3 uppercase font-bold cursor-pointer"
            value="Guardar Ficha"
          />
        </div>
        <div className="flex flex-col justify-start">
          <div className="flex flex-row items-center mt-10">
            <label
              htmlFor="createdAt"
              className=" text-gray-700 w-52 text-sm font-bold mb-2"
            >
              Fecha Creacion de la Ficha
            </label>
            <div className="mt-2">
              <input
                type="date"
                name="createdAt"
                id="createdAt"
                className="w-52 p-3 bg-white"
                placeholder=""
              />
              
            </div>
          </div>
          <div className="mt-10 flex flex-row items-center">
            <label
              htmlFor="last-name"
              className="text-gray-700 w-52 text-sm font-bold mb-2"
            >
              Paciente
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="off"
              className="w-96 p-3"
              placeholder="Buscar paciente"
            />
            <button
                className="bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white p-3 uppercase font-bold cursor-pointer"
              >Buscar</button>
          </div>
        </div>
      </div>
      <h2 className="text-xl font-bold mt-4 mb-2">Consultas</h2>
      <div className="mt-4 ">
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg text-xs">
          Agregar Consulta
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 mt-4">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-gray-700 font-bold">Fecha</th>
              <th className="px-4 py-2 text-gray-700 font-bold">Hora</th>
              <th className="px-4 py-2 text-gray-700 font-bold">Observación</th>
              <th className="px-4 py-2 text-gray-700 font-bold">Asistencia</th>
            </tr>
          </thead>
          <tbody>
            {/*consultas.map((consulta) => (
              <tr key={consulta.id}>
                <td className="px-4 py-2">{consulta.createdAt | htmlFormatDate}</td>
                <td className="px-4 py-2">{consulta.hora_consulta}</td>
                <td className="px-4 py-2">{consulta.observacion}</td>
                <td className="px-4 py-2">
                  <input type="checkbox" className="mr-2" checked={consulta.asistio} disabled />
                </td>
              </tr>
            ))*/}
          </tbody>
        </table>
      </div>
    </>
  );
}
