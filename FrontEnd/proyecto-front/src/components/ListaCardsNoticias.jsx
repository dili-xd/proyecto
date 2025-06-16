import { useEffect, useState } from "react"
import CardComponente from "./CardComponente"
import { getData } from "../servicios/fetch"

function ListaCardsNoticias() {
    const [noticias,setNoticias] = useState([])

    useEffect(()=>{
        async function obtenerNoticias() {
            const peticion = await getData("apiNoticias/noticias/")
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
                        img={"https://circulotne.com/wp-content/uploads/2017/10/20171003-Google_revistaTNE-799x399.jpg"}
                    />
                )
            })}
        </>
    )
}
export default ListaCardsNoticias