import Header from "./Components/Header"
import Formulario from "./Components/Formulario"
import Listado from "./Components/Listado"
import {useEffect, useState} from 'react'
import Paciente from "./Components/Paciente"

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  useEffect(()=>{
      const obtenerSL=()=>{
      const PacientesLS = JSON.parse(localStorage.getItem('pacientes'))?? [];
      setPacientes(PacientesLS)

    }
    obtenerSL();
   

    

  },[])
  useEffect(()=>{
 (localStorage.setItem('pacientes',JSON.stringify(pacientes)))

    

  },[pacientes])


  return (
    <>
     <Header />
     <div className="flex flex-row w-full h-full">
      <Formulario
           pacientes = {pacientes}
           paciente = {paciente}
           setPacientes ={setPacientes}
           setPaciente = {setPaciente}
         
      />
      <Listado 
        pacientes = {pacientes}
        setPaciente = {setPaciente}
        paciente = {paciente}
        setPacientes={setPacientes}
     
      />
      

     </div>
    </>
  )
}

export default App
