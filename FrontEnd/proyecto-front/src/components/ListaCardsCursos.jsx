import {useState, useEffect} from 'react';
import {getData, posData} from '../servicios/fetch';
import CardComponente from './CardComponente';
import Modal from '@mui/material/Modal';
import ModalCalificarCurso from './ModalCalificarCurso';


function ListaCardsCursos() {
    const [cursos, setCursos] = useState([])
    const [modalbrir,setModalAbrir] = useState(false)
    const [cursoCalificar, setCursoCalificar] = useState(null)


    function abrirModal(curso){
        setModalAbrir(true)
        setCursoCalificar(curso)
    }

    function cerrarModal(){
        setModalAbrir(false)    
}

    useEffect(()=>{
        async function traerCursos() {
            const peticion = await getData('apiCursos/cursos')
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
            img={curso.img}
            calficar={()=>abrirModal(curso)}

        />
        )
    })}
    <ModalCalificarCurso abrir={modalbrir} cerrar={cerrarModal} cursos={cursoCalificar}/>
    </>
   )
}
export default ListaCardsCursos;