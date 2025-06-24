import { useEffect, useState } from "react"
import CardComponente from "./CardComponente"
import { getData } from "../servicios/fetch"
import ModalCalificarNoticia from "./ModalCalificarNoticia"

function ListaCardsNoticias() {
    const [noticias,setNoticias] = useState([])
    const [modalbrir, setModalAbrir] = useState(false)
    const [noticiaCalificar, setNoticiaCalificar] = useState(null)

    function abrirModal(noticia) {
        setModalAbrir(true)
        setNoticiaCalificar(noticia)
    }

    function cerrarModal() {
        setModalAbrir(false)
    }

    useEffect(()=>{
        async function obtenerNoticias() {
            const peticion = await getData("apiNoticias/noticias")
            console.log(peticion);
            setNoticias(peticion)
        }
        obtenerNoticias()
    },[])
    
    return(
        <>
            {noticias.map((elemento)=>{
                return(
                    <CardComponente
                        key={elemento.id}
                        titulo={elemento.titulo}
                        descripcion={elemento.contenido}
                        img={elemento.img}
                        calficar={()=>abrirModal(elemento)}
                    />
                )
            })}
            <ModalCalificarNoticia noticia={noticiaCalificar} abrir={modalbrir} cerrar={cerrarModal}/>
        </>
    )
}
export default ListaCardsNoticias