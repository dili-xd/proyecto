import ListaComentariosCursos from "../components/ListaComentariosCursos"
import { useState,useEffect } from "react"
import { getData } from "../servicios/fetch"
function NoticiaMas() {
    const [noticiasComentarios,setNoticiasComentarios]=useState([])
    useEffect(()=>{
        async function traerComentatrioNoticia() {
            const peticion = await getData('apiNoticias/calificar_noticia')
            const filtradoNoticias = await peticion.filter((noticia)=>noticia.noticia == localStorage.getItem('noticiaId'))
            setNoticiasComentarios(filtradoNoticias)
        }
        traerComentatrioNoticia()
    }
    )
    return(
        <>
         {noticiasComentarios.length > 0 ?
         <ListaComentariosCursos datos={noticiasComentarios}/>
        :<h1>NO HAY COMENTARIOS</h1>}
         </>
    )
    
}
export default NoticiaMas