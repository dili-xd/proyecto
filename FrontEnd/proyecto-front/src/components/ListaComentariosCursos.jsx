import { useEffect, useState } from "react"
import ComentarioComponente from "./ComentarioComponente"
import { getData } from "../servicios/fetch"
import { deleteData } from "../servicios/fetch"
import { patchData } from "../servicios/fetch"

function ListaComentariosCursos({datos,endpointUrlEliminar,endpointUrlEditar,recarga,setRecarga}){
    async function eliminarComentario(id) {
        const peticion= await deleteData(endpointUrlEliminar,id)
         console.log (peticion);
        console.log(endpointUrlEliminar)    
        setRecarga(!recarga)
    }
    async function editarComentarioCalificacion(id,datos) {
        const peticion = await patchData(datos,endpointUrlEditar,id)
        console.log(peticion);
        setRecarga(!recarga)
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
                editarComentario={(datos)=>editarComentarioCalificacion(dato.id,datos)}
                />
            )
        })}
        </>
    )
}
export default ListaComentariosCursos