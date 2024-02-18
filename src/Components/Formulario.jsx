import {useState,useEffect} from 'react'

export default function Formulario({pacientes,paciente,setPacientes,setPaciente}){
   
        const [mascota,setMascota] = useState('')
        const [propietario,setPropietario] = useState('')
        const [email,setEmail] = useState('')
        const [alta,setAlta] = useState('')
        const [sintomas,setSintomas] = useState('')

        useEffect(()=>{
            if(Object.keys(paciente).length>0){
                setMascota(paciente.mascota)
                setPropietario(paciente.propietario)
                setEmail(paciente.email)
                setAlta(paciente.alta)
                setSintomas(paciente.sintomas)

            }

        },[paciente])

        function handleSubmit(e){
            e.preventDefault();
            if(mascota==='' ||propietario==='' ||email==='' ||alta=='' || sintomas===''){
                alert('Todos los campos son obligatorios')
                return
            }else{
                const objPaciente = {
                    mascota,
                    propietario,
                    email,
                    alta,
                    sintomas,
                   
                }
                if(paciente.id){
                    objPaciente.id = paciente.id
                    const actualizada = pacientes.map(paciente=>paciente.id===
                    objPaciente.id ? objPaciente : paciente)
                    setPacientes(actualizada)
                }else{
                    objPaciente.id =Date.now()
                    setPacientes([...pacientes,objPaciente])
                }
               
              
                
            
            }
            setTimeout(()=>{
                setMascota('')
                setPropietario('')
                setEmail('')
                setAlta('')
                setSintomas('')


            },1000)



        }
      

    return(
        <>
        <aside className="flex flex-col text-green-100 gap-y-2 items-center w-2/4 h-3/4">
             <h3 className="font-bold text-xl">Seguimiento Pacientes</h3>
             <p>Añade Pacientes y <span className="text-green-500">Administralos</span></p>
        <form className="w-2/4 h-full mt-6 items center flex flex-col  justify-around border-2 p-2">
          <div className="flex flex-col gap-y-2 text-green-500 ">
              <label htmlFor="mascota">Nombre Mascota</label>
              <input onChange={e =>setMascota(e.target.value)} value={mascota} 
              className="text-black  w-full h-6" type="text" name="mascota" placeholder="Nombre de la mascota."/>
  
          </div>
          <div className="text-green-500  flex flex-col gap-y-2">
              <label htmlFor="Propietario">Nombre del Propietario</label>
              <input
              onChange={e =>setPropietario(e.target.value)} value={propietario} 
               className="text-black  w-full h-6" type="text" name="Propietario" placeholder="Nombre de la Propietario"/>
  
          </div>
          <div className="text-green-500  flex flex-col gap-y-2">
              <label htmlFor="Email">Email.</label>
              <input
              onChange={e =>setEmail(e.target.value)} value={email} 
               className="text-black  w-full h-6" type="text" name="Email" placeholder="Email"/>
  
          </div>
          <div className="text-green-500  flex flex-col gap-y-2">
              <label htmlFor="Alta">Alta</label>
              <input 
              onChange={e =>setAlta(e.target.value)} value={alta} 
              className="text-black  w-full h-6 " type="date" name="Alta" placeholder="Alta"/>
  
          </div>
          <div className="text-green-500 flex flex-col gap-y-2">
              <label htmlFor="mascota">Sintomas</label>
              <textarea 
              onChange={e =>setSintomas(e.target.value)} value={sintomas} 
              className="text-black p-2 " name="" id="" cols="30" rows="10"></textarea>
  
          </div>
          <input 
            onClick={handleSubmit}
           className="text-black bg-green-200  mt-2 rounded-lg "
            type="submit" 
          
           />
        </form>
       

        </aside>
        
       
      </>
      

    )
 
}