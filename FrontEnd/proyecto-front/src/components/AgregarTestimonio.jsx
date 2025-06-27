import React, { useState } from 'react';
import { posData } from '../servicios/fetch';
import '../styles/AgregarTestimonios.css';  
import Swal from "sweetalert2"

function AgregarTestimonio() {
    const [contenidoTestimonio, setContenidoTestimonio] = useState("");

    async function enviarTestimonio() {
       const objTestimonio = {
            "contenido": contenidoTestimonio,
            "usuario": localStorage.getItem("id_usuario")
        }
        if(contenidoTestimonio == ""){
            Swal.fire({
                title: "¡Error al agregar el testimonio!",
                text: "Por favor llene todos los campos",
                icon: "error"
              });
              return
            }
        const peticion = await posData("apiTestimonio/testimonio/", objTestimonio);
        Swal.fire({
            title: "¡Testimonio agregado!",
            text: "Se agregó el testimonio con éxtio",
            icon: "success"
          });
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