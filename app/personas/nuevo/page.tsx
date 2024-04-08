import AddPersona from '@/components/personas/AddPersonaForm'
import PersonaForm from '@/components/personas/PersonaForms'
import Heading from '@/components/ui/Heading'
import React from 'react'

export default function CrearPersonaPage() {
  return (
    <>
      <Heading>Nueva Persona</Heading>

      <AddPersona>
        <PersonaForm/>
      </AddPersona>
    
    </>
  )
}
