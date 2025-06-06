import SidebarAdmin from "../components/SidearAdmin";
import TablaCursos from "../components/TablaCursos";
import TablaUsuarios from "../components/TablaUsuarios";
import Tablita from "../components/Tablita";
import { useState } from "react";

function Admin(){
    const [mostrarTablaUsuarios,setMostrarTablaUsuarios] = useState(true    );
    const [mostrarTablaCursos,setMostrarCursos] = useState(false);

    function mostrarCambioUsuario(){
        setMostrarTablaUsuarios(!mostrarTablaUsuarios)
        setMostrarCursos(false)
    }
    function mostrarCambioCursos(){
        setMostrarCursos(!mostrarTablaCursos)
        setMostrarTablaUsuarios(false)
    }

    return(
        <>

        <SidebarAdmin mostrarUsuarios={mostrarCambioUsuario} mostrarCursos={mostrarCambioCursos}/>
        {mostrarTablaUsuarios && <Tablita/>}
        <div style={{marginTop: "100px"}}>
        {mostrarTablaCursos && <TablaCursos/>}
        </div>
        </>
    )
}
export default Admin;