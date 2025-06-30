import ListaComentariosCursos from "../components/ListaComentariosCursos"
import { useState, useEffect } from "react"
import { getData } from "../servicios/fetch"
import PartSupMas from "../components/PartSupMas"
import "../styles/JuegoMas.css"
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
        <div className="contenedor-juego-mas">
        <div className="contenido-juego">
                <PartSupMas img={infoJuego.img} descripcion={infoJuego.descripcion} titulo={infoJuego.titulo}/>
            </div>
            <div className="comentarios-juego">
            <h2>Comentarios</h2>
            <div className="comentarios-lista">
                {juegosComentarios.length > 0 ? (
            <ListaComentariosCursos datos={juegosComentarios} endpointUrlEliminar={"apiCursos/eliminar_calificacion_juego/"} endpointUrlEditar={"apiCursos/editar_calificacion_juego/"} recarga={recarga} setRecarga={setRecarga}/>
        ):(
            <h1>NO HAY COMENTARIOS</h1>
        )}    
        </div>
        </div>
        </div>
        </>
    )
}
export default JuegoMas