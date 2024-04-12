"use client";
import { useForm } from "@/src/hooks/useForm";
import { Consulta } from "@prisma/client";
import { useEffect, useState } from "react";

interface ModalProps {
  verOpen: boolean;
  setVerOpen: (open: boolean) => boolean | void;
  consulta: Consulta;
}

export const VerModal: React.FC<ModalProps> = ({
  consulta,
  verOpen,
  setVerOpen,
}) => {
  const [formState, setFormState] = useState(consulta);
  useEffect(() => {
    setFormState(consulta);
  }, [consulta]);

  const { observacion } = formState;
  console.log(observacion);
  return (
    <>
      <dialog id="paciente_modal" open={verOpen} className="modal">
        <div className="bg-gray-400 p-5 w-auto rounded-md mt-2 mb-2">
          <div className="flex justify-between">
            <label>Agrega la consulta del Paciente</label>
          </div>
          <div className="flex flex-col justify-start">
            <form id="consultaForm" className="space-y-6 p-8">
              <div className="flex flex-col">
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
                    value={observacion || "no hay"}
                    className="w-96 p-3 border-gray-300 rounded-md"
                    placeholder="Escribe tus observaciones..."
                  ></textarea>
                </div>
              </div>
            </form>
            <div className="flex items-center justify-evenly mt-4">
              <button
                onClick={() => {
                  setFormState({
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
                  setVerOpen(!verOpen);
                }}
                className="btn"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};
