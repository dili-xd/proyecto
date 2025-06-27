import ListaComentariosCursos from "../components/ListaComentariosCursos"
import { useState, useEffect } from "react"
import { getData } from "../servicios/fetch"
function JuegoMas() {
    const [juegosComentarios, setJuegosComentarios] = useState([])
    const [infoJuego, setInfoJuego] = useState([])
    const [recarga,setRecarga] = useState(false)
    useEffect(() => {
        async function traerJuego() {
            const peticion = await getData('apiCursos/juego', localStorage.getItem('juegoId') + "/")
            setInfoJuego(peticion)
            console.log(peticion);
        }
        async function traerComentatrioJuego() {
            const peticion = await getData('apiCursos/calificar_juego')
            const filtradoJuegos = await peticion.filter((juego) => juego.juego == localStorage.getItem('juegoId'))
            setJuegosComentarios(filtradoJuegos)
        }
        traerComentatrioJuego()
        traerJuego()
    }
    ,[recarga])
    return (
        <>
            <h2>{infoJuego.titulo}</h2>
            <img src={infoJuego.img} />
            <p>{infoJuego.descripcion}</p>
            <ListaComentariosCursos datos={juegosComentarios} endpointUrlEliminar={"apiCursos/eliminar_calificacion_juego/"} endpointUrlEditar={"apiCursos/editar_calificacion_juego/"} recarga={recarga} setRecarga={setRecarga}/>
        </>
    )
}
export default JuegoMas