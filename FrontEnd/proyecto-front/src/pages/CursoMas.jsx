import ComentarioComponente from "../components/ComentarioComponente"
import ListaComentariosCursos from "../components/ListaComentariosCursos"
import { useState, useEffect } from "react"
import { getData } from "../servicios/fetch"
import Navbar from "../components/Navbar"
import PartSupMas from "../components/PartSupMas"
import "../styles/CursoMas.css"
function CursoMas() {
    const [cursosComentarios, setCursosComentarios] = useState([])
    const [infoCurso, setInfoCurso] = useState([])
    const [recarga,setRecarga] = useState(false)

    useEffect(() => {
        async function traerCurso() {
            const peticion = await getData('apiCursos/curso', localStorage.getItem('cursoId') + "/")
            setInfoCurso(peticion)
            console.log(peticion);
        }
        async function traerComentatrioCurso() {
            const peticion = await getData('apiCursos/calificar_curso')
            console.log(peticion);
            const filtradoCursos = await peticion.filter((curso) => curso.curso == localStorage.getItem('cursoId'))
            console.log(filtradoCursos);
            setCursosComentarios(filtradoCursos)
        }
        traerCurso()
        traerComentatrioCurso()
    },[recarga])
    return (
        <>
        <Navbar/>
        <div className="contenedor-curso-mas">
            <div className="contenido-curso">
                <PartSupMas img={infoCurso.img} descripcion={infoCurso.descripcion} titulo={infoCurso.titulo}/>
            </div>
            <div className="comentarios-curso">
                <h2>Comentarios</h2>
                <div className="comentarios-lista">
                    {cursosComentarios.length > 0 ?(
                    <ListaComentariosCursos datos={cursosComentarios} endpointUrlEliminar={'apiCursos/eliminar_calificacion_curso/'} endpointUrlEditar={"apiCursos/editar_calificacion_curso/"} recarga={recarga} setRecarga={setRecarga}/>
                ):(
                    <h1>NO HAY COMENTARIOS</h1>
                  )}
                </div>
            </div>
        </div>
        </>
    )
}
export default CursoMas