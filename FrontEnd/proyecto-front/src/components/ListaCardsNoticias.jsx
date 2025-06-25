import { useEffect, useState } from "react"
import CardComponente from "./CardComponente"
import { getData } from "../servicios/fetch"
import ModalCalificarNoticia from "./ModalCalificarNoticia"
import { useNavigate } from "react-router-dom";


function ListaCardsNoticias() {
    const [noticias,setNoticias] = useState([])
    const [modalbrir, setModalAbrir] = useState(false)
    const [noticiaCalificar, setNoticiaCalificar] = useState(null)
    const navigate = useNavigate()

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

    
    function verMasNoticia(id) {
        localStorage.setItem("noticiaId",id)
        navigate("/noticia")
    }
    
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
                        mostrarInscribir={false}
                        funcionVerMas={()=>verMasNoticia(elemento.id)}
                    />
                )
            })}
            <ModalCalificarNoticia noticia={noticiaCalificar} abrir={modalbrir} cerrar={cerrarModal}/>
        </>
    )
}
export default ListaCardsNoticias