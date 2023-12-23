import Paciente from './Paciente'
export default function Listado({paciente, pacientes, setPaciente,setPacientes}){

  function eliminarCita(id){
    const respuesta = confirm('¿Desea eliminar el paciente?')
    if(respuesta){
      const listaActualizada = pacientes.filter(p=>p.id!==id)
      setPacientes(listaActualizada)

    }
   

  }
  function actualizar(p){
    setMascota(p.mascota)
    setPropietario(p.propietario)
    setEmail(p.email)
    setAlta(p.alta)
    setSintomas(p.sintomas)
    
}


    return(
      <aside className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">
      {pacientes.length>0 ?(
        <>
          <h2 className="font-black text-xl text-center ">Listado Pacientes</h2>
          <p className="mt-6  mb-4  text-green-200 text-center">Administra tus {''}
           <span className="text-green-600">Pacientes y citas</span>
          </p>

        {pacientes.map((p)=>(
        
         <Paciente 
           key={p.id}
           paciente = {p}  
           setPaciente = {setPaciente}
           eliminarCita = {eliminarCita}
         />
        ))}
        
        
        
        </>

      ):(
        <>
          <h2 className="font-black text-green-200 text-xl text-center ">No hay Pacientes</h2>
          <p className="mt-2 mb-4 pr-6 text-green-200 text-center">Comienza agregando pacientes {''}
             <span className="text-green-600">Y apareceran en este lugar</span>
          </p>
        </>



      )}
    
  


    </aside>
   
   
    )



          }