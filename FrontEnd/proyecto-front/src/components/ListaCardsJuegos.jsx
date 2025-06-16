import { useEffect, useState } from "react";
import CardComponente from "./CardComponente";
import { getData } from "../servicios/fetch";

function ListaCardsJuegos(){
    const [juegos, setJuegos] = useState([])

    useEffect(()=>{
        async function obtenerJuegos() {
            const peticion = await getData ('apiCursos/juegos/')
            setJuegos(peticion)
            console.log(peticion);
        }
        obtenerJuegos()
    },[])
    return(
        <>
        {juegos.map((juego) => {
            return(
                <CardComponente
                    key={juego.id}
                    titulo={juego.nombre}
                    descripcion={juego.descripcion}
                    nivel={juego.dificultad}    
                />
            )
        })}
        </>
    )

}
export default ListaCardsJuegos;