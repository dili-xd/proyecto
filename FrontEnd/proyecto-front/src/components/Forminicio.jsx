import { useState } from "react"
import { Link } from "react-router-dom"
import { posData } from "../servicios/fetch"
import "../styles/inicio.css"
import Swal from 'sweetalert2'

function FormInicio(){
    const [usuario,setUsuario]=useState("")
    const [clave,setClave]=useState("")
    
    async function validarUsuario(evento) {
        evento.preventDefault()
        const usuarioObj={
            "username":usuario,
            "password":clave
        }
        const respuesta= await posData('apiUsuarios/login_usuario/',usuarioObj)
        
        if(respuesta.message){
           Swal.fire({
            title:"Exito!",
            text:"Sesión iniciada",
            icon:"success",
            confirmButtonText:"OK",
           }); 
            localStorage.setItem("token",respuesta.token)
        }else{
            Swal.fire({
                title:"Error!",
                text:"La contraseña es incorrecta",
                icon:"error",
                confirmButtonText:"OK",
               }); 
        }   

        
    }
    return(
        <>
        <div className="contenedor-registro">
        <h1 className="titulo1" >Iniciar Sesión</h1>
        <input className="input" type="text" placeholder="Usuario" onChange={(e)=>setUsuario(e.target.value)} />
        <input className="input" type="password" placeholder="clave" onChange={(e)=>setClave(e.target.value)}/>
        <button className="botoN" onClick={validarUsuario}>Iniciar Sesión</button>
        <Link to={"/"}>ir a registro</Link>
        </div>
        </>
    )
}
export default FormInicio