import SidebarAdmin from "../components/SidearAdmin";
import TablaCursos from "../components/TablaCursos";
import TablaUsuarios from "../components/TablaUsuarios";
import Tablita from "../components/Tablita";
import AgregarCurso from "../components/AgregarCurso";
import { useState } from "react";
import '../styles/Admin.css';  
import TablaJuegos from "../components/TablaJuegos";
import AgregarJuego from "../components/AgregarJuego";

function Admin(){
    const [mostrarTablaUsuarios,setMostrarTablaUsuarios] = useState(true);
    const [mostrarTablaCursos,setMostrarCursos] = useState(false);
    const [mostrarTablaJuegos,setMostrarTablaJuegos] = useState(false)
    
    const [mostrarAgregarCurso,setMostrarAgregarCurso] = useState(false);
    const [mostrarAgregarJuegos,setMostrarAgregarJuegos] = useState(false);

    function mostrarCambioUsuario(){
        setMostrarTablaUsuarios(!mostrarTablaUsuarios)
        setMostrarCursos(false)
        setMostrarAgregarCurso(false)
        setMostrarTablaJuegos(false)
    }
    function mostrarCambioCursos(){
        setMostrarCursos(!mostrarTablaCursos)
        setMostrarTablaUsuarios(false)
        setMostrarAgregarCurso(false)
        setMostrarAgregarJuegos(false)
        setMostrarTablaJuegos(false)
    }
    function mostrarCambioJuegos(){
        setMostrarTablaJuegos(!mostrarTablaJuegos)
        setMostrarTablaUsuarios(false)
        setMostrarCursos(false)
        setMostrarAgregarCurso(false)
    }


    function mostrarFormularioCurso(){
        setMostrarAgregarCurso(!mostrarAgregarCurso)
        setMostrarTablaUsuarios(false)
        setMostrarCursos(false)
        setMostrarTablaJuegos(false)
        setMostrarAgregarJuegos(false)
    }

    function mostrarFormularioJuegos(){
        setMostrarAgregarJuegos(!mostrarAgregarJuegos)
        setMostrarTablaUsuarios(false)
        setMostrarCursos(false)
        setMostrarTablaJuegos(false)
        setMostrarAgregarCurso(false)
    }

    return(
        <>

        <SidebarAdmin mostrarUsuarios={mostrarCambioUsuario} mostrarCursos={mostrarCambioCursos} mostrarJuegos={mostrarCambioJuegos}  mostrarAgregarCurso={mostrarFormularioCurso} mostrarAgregarJuegos={mostrarFormularioJuegos}/>
        
        <div className="contenedor-tablitas">

        {mostrarTablaUsuarios && <Tablita/>}

        {mostrarTablaCursos && <TablaCursos/>}

        {mostrarAgregarCurso && <AgregarCurso/>}

        {mostrarTablaJuegos && <TablaJuegos/>}

        {mostrarAgregarJuegos && <AgregarJuego/>}

        </div>

        
        </>
    )
}
export default Admin;