import { useEffect, useState } from "react"
import ComentarioComponente from "./ComentarioComponente"
import { getData } from "../servicios/fetch"

function ListaComentariosCursos(){
    const [cursosComentarios,setCursosComentarios]=useState([])

    useEffect(()=>{
        async function traerComentatrioCurso() {
            const peticion = await getData('apiCursos/calificar_curso')
            const filtradoCursos = await peticion.filter((curso)=>curso.curso == localStorage.getItem('cursoId'))
            setCursosComentarios(filtradoCursos)
        }
        traerComentatrioCurso()
    }
    )

    return(
        <>
        {cursosComentarios.map ((curso)=>{
            return(
                <ComentarioComponente
                key={curso.id}
                nombre={curso.usuario_califica}
                calificacion={curso.calificacion}
                />
            )
        })}
        </>
    )
}
export default ListaComentariosCursos