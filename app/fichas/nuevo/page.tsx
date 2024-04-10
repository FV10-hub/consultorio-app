import AddFichaForm from '@/components/fichas/AddFichaForm'
import FichaForms from '@/components/fichas/FichaForms'
import GoBackButton from '@/components/ui/GoBackButton'
import Heading from '@/components/ui/Heading'

export default function CrearFichaaPage() {
  return (
    <>
      <Heading>Nueva Ficha</Heading>
      <GoBackButton />
      <AddFichaForm>
        <FichaForms/>
      </AddFichaForm>
    
    </>
  )
}
