import ComentarioComponente from "../components/ComentarioComponente"
import ListaComentariosCursos from "../components/ListaComentariosCursos"
import { useState, useEffect } from "react"
import { getData } from "../servicios/fetch"
import Navbar from "../components/Navbar"
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
            <h2>{infoCurso.titulo}</h2>
            <img src={infoCurso.img} />
            <p>{infoCurso.descripcion_larga}</p>
            <h3>comentario</h3>
            <hr />
            <ListaComentariosCursos datos={cursosComentarios} endpointUrlEliminar={'apiCursos/eliminar_calificacion_curso/'} endpointUrlEditar={"apiCursos/editar_calificacion_curso/"} recarga={recarga} setRecarga={setRecarga}/>
        </>
    )
}
export default CursoMas