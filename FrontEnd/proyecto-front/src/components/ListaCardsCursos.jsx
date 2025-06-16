import {useState, useEffect} from 'react';
import {getData} from '../servicios/fetch';
import CardComponente from './CardComponente';
function ListaCardsCursos() {
    const [cursos, setCursos] = useState([])

    useEffect(()=>{
        async function traerCursos() {
            const peticion = await getData('apiCursos/cursos/')
            setCursos(peticion)
        }
        traerCursos()
    },[])

    return(
    <>
    {cursos.map((curso)=>{
        return(
        <CardComponente 
            key={curso.id}
            itulo={curso.titulo}
            descripcion={curso.descripcion}
            nivel={curso.nivel}
        />
        )
    })}
    </>
   )
}
export default ListaCardsCursos;