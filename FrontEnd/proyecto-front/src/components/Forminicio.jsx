import { useState } from "react"
import { Link } from "react-router-dom"
import { posData } from "../servicios/fetch"
import "../styles/inicio.css"
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
            alert('si')
        }else{
            alert('no')
        }   

        
    }
    return(
        <>
        <div className="contenedor-registro">
        <h1 className="titulo1" >Iniciar Sesión</h1>
        <input className="input" type="text" placeholder="Usuario" onChange={(e)=>setUsuario(e.target.value)} />
        <input className="input" type="password" placeholder="clave" onChange={(e)=>setClave(e.target.value)}/>
        <button className="boton" onClick={validarUsuario}>Iniciar Sesión</button>
        <Link to={"/"}>ir a registro</Link>
        </div>
        </>
    )
}
export default FormInicio