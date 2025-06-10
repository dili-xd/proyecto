import { useState } from "react";
import { posData } from "../servicios/fetch";
import '../styles/AgregarCurso.css';

function AgregarCurso() {
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [nivel, setNivel] = useState('')

    async function enviarCurso() {
        const curso = {
            titulo: titulo,
            descripcion: descripcion,
            nivel: nivel
        }
        const peticion = await posData('apiCursos/cursos/', curso)
        console.log(peticion);
    }



    return (
        <>
        

            <div className="formulario2">
           <br /> <h1 className="titulo1">CURSOS</h1>


                <input
                    className="campo3"
                    placeholder="Titulo Curso"
                    type="text"
                    onChange={(e) => setTitulo(e.target.value)}
                />

                <input
                    className="campo3"
                    type="text"
                    placeholder="Descripcion Curso"
                    onChange={(e) => setDescripcion(e.target.value)}
                />

                <select className="selector4" onChange={(e) => setNivel(e.target.value)}>
                    <option>Seleccione un nivel</option>
                    <option value="principiante">Principiante</option>
                    <option value="medio">Intermedio</option>
                    <option value="avanzado">Avanzado</option>
                </select>

                <button className="boton5" onClick={enviarCurso}>
                    Agregar Curso!
                </button>
            </div>

        </>
    )
}
export default AgregarCurso;