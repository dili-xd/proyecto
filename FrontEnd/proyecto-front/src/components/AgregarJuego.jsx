  import { posData } from "../servicios/fetch"
import { useState } from "react"
import '../styles/AgregarJuego.css'
function AgregarJuego() {
    const [nombreJuego, setNombreJuego] = useState("")
    const [descripcionJuego, setDescripcionJuego] = useState("")
    const [dificultadJuego, setDificultadJuego] = useState("")
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
    
    async function enviarJuego() {
      let urlImagen = ''
      if (imagen){
        urlImagen=await subirImagen(imagen)
      }
        const objJuego = {
            nombre: nombreJuego,
            descripcion: descripcionJuego,
            dificultad: dificultadJuego,
            img: urlImagen,
        }
        const peticion = await posData("apiCursos/juegos/", objJuego)
        console.log(peticion);
    }

    return( 
        <div className="formulario">
        <h1 className="titulo">AGREGAR JUEGO</h1>
      
        <input
          className="campo"
          placeholder="Titulo Juego"
          onChange={(e) => setNombreJuego(e.target.value)}  />
        <input
          className="campo"
          placeholder="Descripción juego"
          onChange={(e) => setDescripcionJuego(e.target.value)}/>
        <select
          className="selector"
          onChange={(e) => setDificultadJuego(e.target.value)} >
          <option value="">Seleccione dificultad</option>
          <option value="facil">Fácil</option>
          <option value="intermedio">Medio</option>
          <option value="dificil">Difícil</option>
        </select>
        <input type="file" accept="image/*" onChange={(e)=>setImagen(e.target.files[0])}/>
        <button className="boton" onClick={enviarJuego}>Agregar Juego!</button>
      </div>      
    )
}
export default AgregarJuego