import { Consulta, Persona } from "@prisma/client";
import { create } from "zustand";
import { PersonaItem } from "./types";

interface Store {
  pacienteState: Persona
  agregarPacienteAFicha: (persona: Persona) => void;
  /*consultas: Consulta[];
  openPacienteModal: (open: boolean) => void;
  openConsutltaModal: (open: boolean) => void;
  isPacienteModal: boolean;
  isConsutltaModal: boolean;
  agregarConsultaAFicha: (consulta: Consulta) => void;*/
}

export const useStore = create<Store>((set, get) => ({
  pacienteState: {} as Persona,
  agregarPacienteAFicha: (persona: Persona) => {
    set(()=> ({
      pacienteState: persona    
    }))
  },
}));
