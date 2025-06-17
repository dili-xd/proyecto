import { useState } from "react";
import { posData } from "../servicios/fetch";
import '../styles/AgregarNoticia.css';
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
        <div className="formulario3">
        <h1 className="titulo3">Agregar Noticia</h1>

        <div>
            <input className="campo4" type="text" placeholder="Titulo Noticia" onChange={(e)=>setTituloNoticia (e.target.value)} />
 
            <input className="campo4" type="text" placeholder="Contenido Noticia" onChange={(e)=>setContenidoNoticia(e.target.value)} />

            <input className="campo4" type="date" placeholder="Fecha" onChange={(e)=>setFechaPublicacion(e.target.value)} />

            <button className="boton6" onClick={enviarNoticia} >AGREGAR NOTICIA</button>
        </div>
        </div>
        </>
    )




}
export default AgregarNoticia;
