import { useState } from "react";
import { posData } from "../servicios/fetch";

function AgregarCurso(){
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [nivel, setNivel] = useState('')

    async function enviarCurso() {
        const curso={
            titulo:titulo,
            descripcion:descripcion,
            nivel:nivel
        }
        const peticion = await posData('apiCursos/cursos/',curso)
        console.log(peticion);
    }



    return(
        <>
        <h1>cursos</h1>

        <div>
            <input placeholder="Titulo Curso" type="text" onChange={(e)=>setTitulo(e.target.value)} />
            <input type="text" placeholder="Descripcion Curso" onChange={(e)=>setDescripcion(e.target.value)} />

            <select onChange={(e)=>setNivel(e.target.value)}>
                <option>Seleccione un nivel</option>
                <option value={'principiante'}>Principiante</option>
                <option value={'medio'}>Intermedio</option>
                <option value={'avanzado'}>Avanzado</option>
            </select>

            <button onClick={enviarCurso} >Agregar Curso!</button>
        </div>
        </>
    )
}
export default AgregarCurso;