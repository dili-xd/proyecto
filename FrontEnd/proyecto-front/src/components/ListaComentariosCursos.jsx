import ComentarioComponente from "./ComentarioComponente"
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
                img={dato.img_usuario}
                nombre={dato.usuario_califica}
                calificacion={dato.calificacion}
                comentario={dato.comentario}
                mostrarEliminar={dato.usuario == localStorage.getItem("id_usuario")}
                mostrarEditar={dato.usuario == localStorage.getItem("id_usuario")}
                eliminarComentario={()=>eliminarComentario(dato.id)}
                editarComentario={(datos)=>editarComentarioCalificacion(dato.id,datos)}
                />
            )
        })}
        </>
    )
}
export default ListaComentariosCursos