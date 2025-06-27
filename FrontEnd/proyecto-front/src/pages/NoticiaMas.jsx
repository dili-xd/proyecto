import ListaComentariosCursos from "../components/ListaComentariosCursos"
import { useState, useEffect } from "react"
import { getData } from "../servicios/fetch"

function NoticiaMas() {
    const [noticiasComentarios, setNoticiasComentarios] = useState([])
    const [infoNoticia, setInfoNoticia] = useState([])
    const [recarga,setRecarga] = useState(false)
    useEffect(() => {
        async function traerNoticia() {
            const peticion = await getData('apiNoticias/noticia', localStorage.getItem('noticiaId') + "/")
            setInfoNoticia(peticion)
            console.log(peticion);
        }

        async function traerComentatrioNoticia() {
            const peticion = await getData('apiNoticias/calificar_noticia')
            const filtradoNoticias = await peticion.filter((noticia) => noticia.noticia == localStorage.getItem('noticiaId'))
            setNoticiasComentarios(filtradoNoticias)
        }
        traerComentatrioNoticia()
        traerNoticia()
    }
    ,[recarga])
    return (
        <>
            <h2>{infoNoticia.titulo}</h2>
            <img src={infoNoticia.img} />
            <p>{infoNoticia.contenido}</p>

            {noticiasComentarios.length > 0 ?
                <ListaComentariosCursos datos={noticiasComentarios} endpointUrlEliminar={"apiNoticias/eliminar_calificacion_noticia/"} endpointUrlEditar={"apiNoticias/editar_calificacion_noticia/"} recarga={recarga} setRecarga={setRecarga}/>
                : <h1>NO HAY COMENTARIOS</h1>}
        </>
    )

}
export default NoticiaMas