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
        <h1>Noticias</h1>
        
            {noticias.map((elemento)=>{
                return(
                    <CardComponente
                        key={elemento.id}
                        titulo={elemento.titulo}
                        descripcion={elemento.contenido}
                        // img={elemento.img}
                    />
                )
            })}
        </>
    )
}
export default ListaCardsNoticias