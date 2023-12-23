export default function Paciente({paciente,setPaciente,eliminarCita}){

    return(
        <>
           <div className="flex flex-col w-3/4 bg-green-800 p-5 rounded-lg text-white">
            <p>Nombre Mascota: {paciente.mascota}</p>
            <p>Propietario: {paciente.propietario}</p>
            <p>Email contacto: {paciente.email}</p>
            <p>Fecha alta: {paciente.alta}</p>
            <p>Sintomas: {paciente.sintomas}</p>
            <div className="flex ">
                <button
                 onClick={e=>setPaciente(paciente)}
                 className="w-2/4 m-2 bg-indigo-500 hover:bg-indigo-600">Editar</button>
                <button 
                onClick={e=>eliminarCita(paciente.id)}
                className="w-2/4 m-2  bg-red-500 hover:bg-red-600">Eliminar</button>
            </div>


           </div>


        </>
    )
}