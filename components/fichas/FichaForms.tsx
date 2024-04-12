import { Persona } from "@prisma/client";
import { IoAdd } from "react-icons/io5";
import FichaGenericForm from "./FichaGenericForm";
import FichaAddConsulta from "./FichaAddConsulta";

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
    </>
  );
}
