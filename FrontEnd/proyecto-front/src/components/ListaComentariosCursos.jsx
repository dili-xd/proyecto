import { useEffect, useState } from "react"
import ComentarioComponente from "./ComentarioComponente"
import { getData } from "../servicios/fetch"
import { deleteData } from "../servicios/fetch"

function ListaComentariosCursos({datos,endpointUrlEliminar,endpointUrlEditar}){

    async function eliminarComentario(id) {
        const peticion= await deleteData(endpointUrlEliminar,id)
         console.log (peticion);
        console.log(endpointUrlEliminar)    
    }


    return( 
        <>
        {datos.map ((dato)=>{
            return(
                <ComentarioComponente
                key={dato.id}
                nombre={dato.usuario_califica}
                calificacion={dato.calificacion}
                comentario={dato.comentario}
                eliminarComentario={()=>eliminarComentario(dato.id)}
                />
            )
        })}
        </>
    )
}
export default ListaComentariosCursos