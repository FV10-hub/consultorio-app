"use client";
import { useForm } from "@/src/hooks/useForm";
import { Consulta } from "@prisma/client";
import { useState } from "react";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  setConsultaForm: (consulta: Consulta) => void;
}

export const ConsultaModal: React.FC<ModalProps> = ({
  modalOpen,
  setModalOpen,
  setConsultaForm,
}) => {
  const { formState, onIputChange, onResetForm } = useForm({
    hora_consulta: "",
    observacion: "",
    indicacion: "",
    receta: "",
    asistio: false,
    fichaId: 0,
  });

  const { hora_consulta, observacion, indicacion, receta, asistio, fichaId } =
    formState;

  function onPacienteSelect(e) {
    e.preventDefault();
    const now = new Date();
    const nuevaConsulta: Consulta = {
      id: null,
      createdAt: now,
      updatedAt: now,
      hora_consulta,
      observacion,
      indicacion,
      receta,
      asistio,
      fichaId,
    };
    setConsultaForm(nuevaConsulta);
    onResetForm();
    setModalOpen(!modalOpen);
  }

  return (
    <>
      <dialog id="paciente_modal" open={modalOpen} className="modal">
        <div className="bg-gray-400 p-5 w-auto rounded-md mt-2 mb-2">
          <div className="flex justify-between">
            <label>Agrega la consulta del Paciente</label>
          </div>
          <div className="flex flex-col justify-start">
            <form id="consultaForm" className="space-y-6 p-8">
              <div className="flex flex-col">
                <div className="flex flex-row items-center mt-4">
                  <label
                    htmlFor="hora_consulta"
                    className="text-gray-700 w-52 text-sm font-bold mb-2"
                  >
                    Hora de la Consulta
                  </label>
                  <input
                    type="time"
                    name="hora_consulta"
                    id="hora_consulta"
                    value={hora_consulta}
                    onChange={onIputChange}
                    autoComplete="off"
                    className="w-96 p-3 border-gray-300 rounded-md"
                    placeholder="HH:MM"
                  />
                </div>
                <div className="flex flex-row items-center mt-4">
                  <label
                    htmlFor="observacion"
                    className="text-gray-700 w-52 text-sm font-bold mb-2"
                  >
                    Observación
                  </label>
                  <textarea
                    name="observacion"
                    id="observacion"
                    rows={3}
                    value={observacion}
                    onChange={onIputChange}
                    className="w-96 p-3 border-gray-300 rounded-md"
                    placeholder="Escribe tus observaciones..."
                  ></textarea>
                </div>
                <div className="flex flex-row items-center mt-4">
                  <label
                    htmlFor="indicacion"
                    className="text-gray-700 w-52 text-sm font-bold mb-2"
                  >
                    Indicaciones
                  </label>
                  <textarea
                    name="indicacion"
                    id="indicacion"
                    rows={3}
                    value={indicacion}
                    onChange={onIputChange}
                    className="w-96 p-3 border-gray-300 rounded-md"
                    placeholder="Descripción de indicaciones..."
                  ></textarea>
                </div>
                <div className="flex flex-row items-center mt-4">
                  <label
                    htmlFor="receta"
                    className="text-gray-700 w-52 text-sm font-bold mb-2"
                  >
                    Receta
                  </label>
                  <textarea
                    name="receta"
                    id="receta"
                    rows={3}
                    value={receta}
                    onChange={onIputChange}
                    className="w-96 p-3 border-gray-300 rounded-md"
                    placeholder="Detalles de la receta..."
                  ></textarea>
                </div>
                <div className="flex flex-row items-center mt-4">
                  <label
                    htmlFor="asistio"
                    className="text-gray-700 w-52 text-sm font-bold mb-2"
                  >
                    Asistió
                  </label>
                  <input
                    type="checkbox"
                    name="asistio"
                    id="asistio"
                    checked={asistio}
                    onChange={onIputChange}
                    className="ml-4 w-6 h-6"
                  />
                </div>
              </div>
            </form>
            <div className="flex items-center justify-evenly mt-4">
              <button onClick={() => {
                onResetForm();
                setModalOpen(!modalOpen)}} className="btn">
                Cancelar
              </button>
              <button
                onClick={onPacienteSelect}
                type="submit"
                className="btn bg-green-500 hover:bg-green-600 text-white"
              >
                Guardar Consulta
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};
