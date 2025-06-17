import React, { useState } from 'react';
import { posData } from '../servicios/fetch';
import '../styles/AgregarTestimonios.css';   
function AgregarTestimonio() {
    const [contenidoTestimonio, setContenidoTestimonio] = useState("");

    async function enviarTestimonio() {
       const objTestimonio = {
            "contenido": contenidoTestimonio,
            "usuario": 1
        }
        const peticion = await posData("apiTestimonio/testimonio/", objTestimonio);
        console.log(peticion);
    }

    return(
        <>
        <div className="formulario6">
            <h1 className='titulo5'>Agregar Testimonio</h1>

            <input className='campo8' onChange={(e)=>setContenidoTestimonio(e.target.value)} placeholder="Contenido"/>

            <button className='boton9' onClick={enviarTestimonio}>Agregar Testimonio!</button>
        </div>
        </>
    )
}
export default AgregarTestimonio