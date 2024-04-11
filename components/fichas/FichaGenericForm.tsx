"use client";
import React, { useState } from "react";
import { AiFillSave } from "react-icons/ai";
import { IoAdd, IoSearch } from "react-icons/io5";
import { PacientesModal } from "./PacientesModal";
import { Persona } from "@prisma/client";
import { useStore } from "@/src/store";
type FichaProps = {
  pacientes: Persona[];
  totalPacientes: number;
};

export default function FichaGenericForm({
  pacientes,
  totalPacientes,
}: FichaProps) {
  
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const pacientesForms = pacientes;
  const totalPacientesForms = totalPacientes;
  function getPersonaSelected(persona: Persona) {
    console.log("persona sleccionada ", persona);
    agregarPacienteAFicha(persona);
  }

  const agregarPacienteAFicha = useStore((state) => state.agregarPacienteAFicha)
  const pacienteState = useStore((state) => state.pacienteState)
  return (
    <>
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
                value={new Date().toISOString().split("T")[0]}
                disabled={true}
              />
            </div>
          </div>
          <div className="mt-10 flex flex-row items-center">
            <label
              htmlFor="paciente_nombre"
              className="text-gray-700 w-52 text-sm font-bold mb-2"
            >
              Paciente
            </label>
            <input
              type="text"
              name="paciente_nombre"
              id="paciente_nombre"
              autoComplete="off"
              className="w-96 p-3"
              placeholder="Buscar paciente"
              defaultValue={pacienteState.nombre_completo || "nohay"}
            />
            <input type="hidden" name="personaId" id="personaId" defaultValue={pacienteState.id || 0}/>
            <button
              className="btn bg-cyan-500 hover:bg-cyan-600 text-white font-bold"
              onClick={() => setModalOpen(true)}
            >
              Buscar <IoSearch className="ml-2" size={18} />
            </button>
          </div>
        </div>
        <PacientesModal
          personas={pacientesForms}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setPacienteForm={getPersonaSelected}
        />
      </div>
    </>
  );
}
