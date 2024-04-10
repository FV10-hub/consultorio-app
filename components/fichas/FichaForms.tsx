"use client";
import { Ficha } from "@prisma/client";
import { useEffect, useState } from "react";
import { AiFillSave, AiOutlinePlus } from "react-icons/ai";

type EspecialidadProps = {
  ficha?: Ficha;
};
export default function FichaForms({ ficha }: EspecialidadProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    const fechaActual = new Date().toISOString().split("T")[0];
    setFecha(fechaActual);
  }, []);
  return (
    <>
      <form className="space-y-5">
        <div className="border-b border-gray-900/10 pb-12 ">
          <div className="flex flex-col lg:flex-row lg:justify-end gap-5">
            <button className="btn bg-green-500 hover:bg-green-600 text-white">
              Guardar Ficha <AiFillSave className="ml-2" size={18} />
            </button>
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
                  value={fecha} // Asignamos el estado al valor del input
                  disabled={true}
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
              <button className="btn bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white p-3 uppercase font-bold cursor-pointer">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </form>
      <h2 className="text-xl font-bold mt-4 mb-2">Consultas</h2>
      <div className="mt-4 ">
        <button
          className="btn bg-cyan-500 hover:bg-cyan-600 text-white font-bold"
          onClick={() => setModalOpen(true)}
        >
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

      <dialog id="my_modal_1" open={modalOpen} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={() => setModalOpen(false)} className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
