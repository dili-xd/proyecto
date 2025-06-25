import { useEffect, useState } from "react"
import ComentarioComponente from "./ComentarioComponente"
import { getData } from "../servicios/fetch"

function ListaComentariosCursos({datos}){
    

    return( 
        <>
        {datos.map ((dato)=>{
            return(
                <ComentarioComponente
                key={dato.id}
                nombre={dato.usuario_califica}
                calificacion={dato.calificacion}
                comentario={dato.comentario}
                />
            )
        })}
        </>
    )
}
export default ListaComentariosCursos