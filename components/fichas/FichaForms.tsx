import { Persona } from "@prisma/client";
import { IoAdd } from "react-icons/io5";
import FichaGenericForm from "./FichaGenericForm";

type FichaProps = {
  pacientes: Persona[];
  totalPacientes: number
};

export default async function FichaForms({ pacientes, totalPacientes }: FichaProps) {
  const pacientesForms = pacientes;
  const totalPacientesForms = totalPacientes;

  return (
    <>
      <FichaGenericForm pacientes={pacientes}  totalPacientes={totalPacientes}/>
      <h2 className="text-xl font-bold mt-4 mb-2">Consultas</h2>
      <div className="mt-4 ">
        <button className="btn bg-cyan-500 hover:bg-cyan-600 text-white font-bold">
          Agregar Consulta <IoAdd className="ml-2" size={18} />
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
