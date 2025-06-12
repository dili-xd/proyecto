import { useState } from "react"
import "../styles/Registro.css"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { posData } from "../servicios/fetch"

function FormRegistro() {
  const [usuario, setUsuario] = useState("")
  const [correo, setCorreo] = useState("")
  const [clave, setClave] = useState("")
  const [eduacionAcademica, setEducacionAcademica] = useState(false)
  async function guardaUsuarios(evento) {
    evento.preventDefault()
    const usuarioObj = {
      "username": usuario,
      "email": correo,
      "password": clave,
      "educacion_academica": eduacionAcademica
    }
    const respuesta = await posData('apiUsuarios/usuarios/', usuarioObj)

    if (respuesta.message) {
      Swal.fire({
        title: "Usuario creado",
        text: "El usuario se creó",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "No creado!",
        text: "Hubo un error",
        icon: "error",
        confirmButtonText: "OK",
      });
    }


  }
  return (
    <>
      <div className="contenedor-registro">
        <h1 className="titulo1">Crear Cuenta</h1>


        <input type="text" className="input" placeholder="Usuario" onChange={(e) => setUsuario(e.target.value)} />

        <input type="email" placeholder="Correo" className="input" onChange={(e) => setCorreo(e.target.value)} />

        <input type="password" placeholder="Clave" className="input" onChange={(e) => setClave(e.target.value)} />

        <p className="educacion">Tienes educación académica</p>

        <div className="radio">
          <label htmlFor="" className="radio1">SI</label>
          <input type="radio" name="educacion" value={true} className="radio" checked={eduacionAcademica === true} onChange={() => setEducacionAcademica(true)} />
          <label htmlFor="" className="radio1">NO</label>
          <input type="radio" name="educacion" value={false} className="radio" checked={eduacionAcademica === false} onChange={() => setEducacionAcademica(false)} />
        </div>

        <button className="botonB" onClick={guardaUsuarios}>Registrar Cuenta</button>
        <Link to={"/iniciar"}>ir a inicio</Link>
      </div>
    </>

  )
}
export default FormRegistro