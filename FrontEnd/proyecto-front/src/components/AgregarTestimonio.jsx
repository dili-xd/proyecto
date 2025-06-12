import React, { useState } from 'react';
import { posData } from '../servicios/fetch';
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
            <h1>Agregar Testimonio</h1>

            <input onChange={(e)=>setContenidoTestimonio(e.target.value)} placeholder="Contenido"/>

            <button onClick={enviarTestimonio}>Agregar Testimonio!</button>
        </>
    )
}
export default AgregarTestimonio