import SidebarAdmin from "../components/SidearAdmin";
import TablaCursos from "../components/TablaCursos";
import TablaUsuarios from "../components/TablaUsuarios";
import Tablita from "../components/Tablita";
import AgregarCurso from "../components/AgregarCurso";
import { useState } from "react";

function Admin(){
    const [mostrarTablaUsuarios,setMostrarTablaUsuarios] = useState(true);
    const [mostrarTablaCursos,setMostrarCursos] = useState(false);
    const [mostrarAgregarCurso,setMostrarAgregarCurso] = useState(false);

    function mostrarCambioUsuario(){
        setMostrarTablaUsuarios(!mostrarTablaUsuarios)
        setMostrarCursos(false)
        setMostrarAgregarCurso(false)
    }
    function mostrarCambioCursos(){
        setMostrarCursos(!mostrarTablaCursos)
        setMostrarTablaUsuarios(false)
        setMostrarAgregarCurso(false)
    }

    function mostrarFormularioCurso(){
        setMostrarAgregarCurso(!mostrarAgregarCurso)
        setMostrarTablaUsuarios(false)
        setMostrarCursos(false)
    }
    return(
        <>

        <SidebarAdmin mostrarUsuarios={mostrarCambioUsuario} mostrarCursos={mostrarCambioCursos} mostrarAgregarCurso={mostrarFormularioCurso}/>
        {mostrarTablaUsuarios && <Tablita/>}

        <div style={{marginTop: "100px"}}>
        {mostrarTablaCursos && <TablaCursos/>}
        </div>

        <div style={{marginTop: "100px"}}>
        {mostrarAgregarCurso && <AgregarCurso/>}
        </div>


        
        </>
    )
}
export default Admin;