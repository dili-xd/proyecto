import { useState } from "react";
import { posData } from "../servicios/fetch";
import '../styles/AgregarNoticia.css';
import Swal from "sweetalert2"

function AgregarNoticia() {
    const [tituloNoticia, setTituloNoticia] = useState("");
    const [contenidoNoticia,setContenidoNoticia] = useState("");
    const [fechaPublicacion,setFechaPublicacion] = useState("");
    const [imagen,setImagen] = useState(null)

    async function subirImagen(archivo) {
        const data = new FormData()
        data.append('file', archivo)
        data.append('upload_preset', 'preset_imagen')
        data.append('cloud_name', 'dc0pcnlmc')

        const peticion = await fetch('https://api.cloudinary.com/v1_1/dc0pcnlmc/image/upload', {
            method: 'POST',
            body: data
        })
        const respuesta = await peticion.json()
        console.log(respuesta);
        const urlImagen = respuesta.secure_url
        console.log(urlImagen);
        return urlImagen
    }

    async function enviarNoticia(){
        let urlImagen = ''
      if (imagen){
        urlImagen=await subirImagen(imagen)
      }
      if(tituloNoticia == "" || contenidoNoticia == "" || fechaPublicacion == "" || imagen == null){
        Swal.fire({
            title: "¡Error al agregar la noticia!",
            text: "Por favor llene todos los campos",
            icon: "error"
          });
          return
        } 
        const objNoticia={
            titulo:tituloNoticia,
            contenido:contenidoNoticia,
            fecha_poblicacion:fechaPublicacion,
            usuario:localStorage.getItem("id_usuario"),
            img:urlImagen
        }
        const peticion =await posData("apiNoticias/noticias/", objNoticia);    
        Swal.fire({
            title: "¡Noticia Agregada!",
            text: "Éxito al agregar la noticia",
            icon: "success"
          });
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
            <input type="file" accept="image/*" onChange={(e)=>setImagen(e.target.files[0])}/>
        </div>
        </div>
        </>
    )




}
export default AgregarNoticia;
