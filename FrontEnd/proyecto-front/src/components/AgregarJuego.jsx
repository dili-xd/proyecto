import { posData } from "../servicios/fetch"
import { useState } from "react"
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
        const peticion = await posData("apiCursos/juegos", objJuego)
        console.log(peticion);
    }

    return(
        <>
            <input placeholder="Titulo juego" onChange={(e)=>setNombreJuego(e.target.value)}/>

            <input placeholder="Descripción juego" onChange={(e)=>setDescripcionJuego(e.target.value)}/>

            <select onChange={(e)=>setDificultadJuego(e.target.value)}>
                <option value="">Seleccione dificultad</option>
                <option value="facil">Fácil</option>
                <option value="intermedio">Medio</option>
                <option value="dificil">Difícil</option>
            </select>

            <button onClick={enviarJuego}>Agregar Juego!</button>
        </>
    )
}
export default AgregarJuego