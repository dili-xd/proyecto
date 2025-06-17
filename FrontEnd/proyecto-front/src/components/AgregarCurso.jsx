import { useState } from "react";
import { posData } from "../servicios/fetch";
import '../styles/AgregarCurso.css';

function AgregarCurso() {
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [nivel, setNivel] = useState('')
    const [imagen,setImagen] = useState(null)

    async function subirImagen(archivo) {
        const data = new FormData()
        data.append('file', archivo)
        data.append('upload_preset', 'preset_imagen')
        data.append('cloud_name', 'dc0pcnlmc')

        const peticion = await fetch('https://api.cloudinary.com/v1_1/dc0pcnlmc/image/upload', {
            method: 'POST',
            body: data
        })
        const respuesta = await peticion.json()
        console.log(respuesta);
        const urlImagen = respuesta.secure_url
        console.log(urlImagen);
        return urlImagen
    }


    async function enviarCurso() {
        let urlImagen = ''
        if (imagen) {
            urlImagen = await subirImagen(imagen) 
        }          

        const curso = {
            titulo: titulo,
            descripcion: descripcion,
            nivel: nivel,
            img:urlImagen
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

                    <input type="file" accept="image/*" onChange={(e)=>setImagen(e.target.files[0])}/>

                <button className="boton5" onClick={enviarCurso}>
                    Agregar Curso!
                </button>
            </div>

        </>
    )
}
export default AgregarCurso;