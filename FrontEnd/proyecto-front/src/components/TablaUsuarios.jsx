import{useState,useEffect, use} from "react";
import { getData, patchData } from "../servicios/fetch";
function TablaUsuarios(){
    const [usuarios,setUsuarios]=useState([]);   
    
    
    useEffect(()=>{
        async function obtenerUsuarios(){
            const peticion = await getData('apiUsuarios/todos_usuarios/')
            setUsuarios(peticion)             
        }
        obtenerUsuarios()
    },[])

    function estructuraFecha(fecha){
        const fechaE = new Date(fecha)
        const dia = String(fechaE.getDate()).padStart(2,'0')
        const mes = String(fechaE.getMonth()+1).padStart(2,'0')
        const anio = fechaE.getFullYear()
        const horas  = String(fechaE.getHours()).padStart(2,'0')
        const minutos = String(fechaE.getMinutes()).padStart(2,'0')
        return `${dia}/${mes}/${anio} ${horas}:${minutos}`
    }

    async function desactivaUsuario(id) {
        const peticion = await patchData({},"apiUsuarios/estado_usuario/",id)
        console.log(peticion);
    }



    return(
        <>
        <table border={1}>
            <thead>
                <th>Nombre Usuario</th>
                <th>Correo Ususario</th>
                <th>Fecha Creacion</th>
                <th>Editar</th>
                <th>Eliminar</th>
            </thead>
        </table>
        <body>
            {usuarios.map((usuario)=>{
                return(
                    <tr>
                        <td>{usuario.username}</td>
                        <td>{usuario.email}</td>
                        <td>{estructuraFecha(usuario.date_joined)}</td>
                        <td>
                            <button>Editar</button>
                        </td>
                        <td>
                            <button
                                onClick={()=>{
                                    desactivaUsuario(usuario.user_id)
                                }}
                            >Eliminar</button>
                        </td>

                    </tr>
                )
            })}
        </body>        
        </>
    )
}
export default TablaUsuarios;