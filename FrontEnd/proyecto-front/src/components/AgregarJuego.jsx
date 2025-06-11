import { posData } from "../servicios/fetch"
import { useState } from "react"
import '../styles/AgregarJuego.css'
function AgregarJuego() {
    const [nombreJuego, setNombreJuego] = useState("")
    const [descripcionJuego, setDescripcionJuego] = useState("")
    const [dificultadJuego, setDificultadJuego] = useState("")
    
    async function enviarJuego() {
        const objJuego = {
            nombre: nombreJuego,
            descripcion: descripcionJuego,
            dificultad: dificultadJuego
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
        <button className="boton" onClick={enviarJuego}>Agregar Juego!</button>
      </div>      
    )
}
export default AgregarJuego