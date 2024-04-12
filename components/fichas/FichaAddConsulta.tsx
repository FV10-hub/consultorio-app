import React, { useState } from "react";
import { IoAdd, IoEye, IoWatch } from "react-icons/io5";
import { PacientesModal } from "./PacientesModal";
import { Consulta } from "@prisma/client";
import { useStore } from "@/src/store";
import { ConsultaModal } from "./ConsultaModal";
import { formatFecha } from "@/src/utils";
import { VerModal } from "./verConsultaModal";

export default function FichaAddConsulta() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [verOpen, setVerOpen] = useState<boolean>(false);
  const addConsultasAFicha = useStore((state) => state.addConsultasAFicha);
  const consultasDeFicha = useStore((state) => state.consultasDeFicha);
  function getConsultaCreada(consulta: Consulta) {
    addConsultasAFicha(consulta);
  }
  const [verConsulta, setConsultaOpen] = useState<Consulta>({
    id: null,
    createdAt: null,
    updatedAt: null,
    hora_consulta: "",
    observacion: "",
    indicacion: "",
    receta: "",
    asistio: false,
    fichaId: 0,
  });
  function handleVerConsulta(consulta: Consulta) {
    setConsultaOpen(consulta);
    setVerOpen(true);
  }

  return (
    <>
      <h2 className="text-xl font-bold mt-4 mb-2">Consultas</h2>
      <div className="mt-4 ">
        <button
          onClick={() => setModalOpen(true)}
          className="btn bg-cyan-500 hover:bg-cyan-600 text-white font-bold"
        >
          Agregar Consulta <IoAdd className="ml-2" size={18} />
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 mt-4">
        <table className="w-full table-auto table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th className="px-4 py-2 text-gray-700 font-bold">Fecha</th>
              <th className="px-4 py-2 text-gray-700 font-bold">Hora</th>
              <th className="px-4 py-2 text-gray-700 font-bold">Observación</th>
              <th className="px-4 py-2 text-gray-700 font-bold">Asistencia</th>
              <th className="px-4 py-2 text-gray-700 font-bold">Ver</th>
            </tr>
          </thead>
          <tbody>
            {consultasDeFicha.map((consulta) => (
              <tr key={consulta.createdAt.getTime()}>
                <td className="px-4 py-2">{formatFecha(consulta.createdAt)}</td>
                <td className="px-4 py-2">{consulta.hora_consulta}</td>
                <td className="px-4 py-2">{consulta.observacion}</td>
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={consulta.asistio}
                    disabled
                  />
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleVerConsulta(consulta)}
                    className="btn"
                  >
                    Ver <IoEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConsultaModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        setConsultaForm={getConsultaCreada}
      />
      <VerModal verOpen={verOpen} setVerOpen={setVerOpen} consulta={verConsulta} />
    </>
  );
}
