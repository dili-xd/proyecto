import { useState } from "react";
import { posData } from "../servicios/fetch";
function AgregarNoticia() {
    const [tituloNoticia, setTituloNoticia] = useState("");
    const [contenidoNoticia,setContenidoNoticia] = useState("");
    const [fechaPublicacion,setFechaPublicacion] = useState("");

    async function enviarNoticia(){
        const objNoticia={
            titulo:tituloNoticia,
            contenido:contenidoNoticia,
            fecha_poblicacion:fechaPublicacion,
            usuario:2
        }
        const peticion =await posData("apiNoticias/noticias/", objNoticia);    
        console.log(peticion);                                                                               
    }
    return(
        <>
        <h1>Agregar Noticia</h1>

        <div>
            <input type="text" placeholder="Titulo Noticia" onChange={(e)=>setTituloNoticia (e.target.value)} />
 
            <input type="text" placeholder="Contenido Noticia" onChange={(e)=>setContenidoNoticia(e.target.value)} />

            <input type="date" placeholder="Fecha" onChange={(e)=>setFechaPublicacion(e.target.value)} />

            <button onClick={enviarNoticia} >AGREGAR NOTICIA</button>
        </div>
        </>
    )




}
export default AgregarNoticia;
