import TodosLosAutos from "@/components/OpcionesHeader/TodosLosAutos"
import AutosNuevos from "@/components/OpcionesHeader/AutosNuevos"
import Noticias from "@/components/OpcionesHeader/Noticias"
import Ayuda from "@/components/OpcionesHeader/Ayuda"

const OpcionesHeader = () => {
    return (
    <div className='centered-middle flex-row justify-center'>
        <TodosLosAutos className='w-1/4'/>
        <AutosNuevos className='w-1/4'/>
        <Noticias className='w-1/4'/>
        <Ayuda className='w-1/4'/>
    </div>
  )
}

export default OpcionesHeader