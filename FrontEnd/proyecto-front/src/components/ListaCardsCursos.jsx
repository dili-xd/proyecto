import {useState, useEffect} from 'react';
import {getData, posData} from '../servicios/fetch';
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

    async function inscribirCurso(id){
        const objInscripcion = {
            curso: id,
            usuario: localStorage.getItem("id_usuario")
        }
        const peticion = await posData("apiCursos/inscripciones/", objInscripcion)
        console.log(peticion);
    }

    return(
    <>
    {cursos.map((curso)=>{
        return(
        <CardComponente 
            key={curso.id}
            itulo={curso.titulo}
            descripcion={curso.descripcion}
            nivel={curso.nivel}
            mostrarInscribir={true}
            funcionInscribir={()=>inscribirCurso(curso.id)}
            img={"https://www.ina.ac.cr/inavirtual/SiteAssets/imagenes/Cursos%20y%20Programas/CVirtuales.png"}
        />
        )
    })}
    </>
   )
}
export default ListaCardsCursos;