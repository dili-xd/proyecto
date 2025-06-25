import ListaComentariosCursos from "../components/ListaComentariosCursos"
import { useState,useEffect } from "react"
import { getData } from "../servicios/fetch"
function JuegoMas() {
    const [juegosComentarios,setJuegosComentarios]=useState([])
    useEffect(()=>{
            async function traerComentatrioJuego() {
                const peticion = await getData('apiCursos/calificar_juego')
                const filtradoJuegos = await peticion.filter((juego)=>juego.juego == localStorage.getItem('juegoId'))
                setJuegosComentarios(filtradoJuegos)
            }
            traerComentatrioJuego()
        }
        )

    return(
        <>
        <ListaComentariosCursos datos={juegosComentarios}/>
        </>
    )
}
export default JuegoMas