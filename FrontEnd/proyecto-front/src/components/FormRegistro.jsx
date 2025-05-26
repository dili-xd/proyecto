import { useState } from "react"
function FormRegistro(){
    const [usuario, setUsuario]=useState("")
    const [correo, setCorreo]=useState("")
    const[clave,setClave]=useState("")
    const[eduacionAcademica,setEducacionAcademica] =useState(false)
    async function guardaUsuarios(evento) {
        evento.preventDefault()
        const usuarioObj={
            "usernmame":usuario,
            "email":correo,
            "password":clave,
            "educacion_academica":eduacionAcademica
        }
        const respuesta=await posData("apiUsusarios/crear_usuario/",usuarioObj)

        
    }
return(
    <>
    <h1>Crear Cuenta</h1>
    
    <input type="text" placeholder="Usuario" onChange={(e)=> setUsuario(e.target.value)} />
    
    <input type="email" placeholder="Correo" onChange={(e)=> setCorreo(e.target.value)} />
    
    <input type="password" placeholder="Clave" onChange={(e)=> setClave(e.target.value)} />

    <label htmlFor="">SI</label>
    <input type="radio" name="educacion" value={true} checked={eduacionAcademica===true} onChange={()=>setEducacionAcademica(true)}/>

    <label htmlFor="">NO</label>
    <input type="radio" name="educacion"value={false} hecked={eduacionAcademica===true} onChange={()=>setEducacionAcademica(false)} />

    <button onClick={guardaUsuarios}>Registrar Cuenta</button>
    </>
)
}
export default FormRegistro