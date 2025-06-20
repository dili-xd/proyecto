import SidebarAdmin from "../components/SidearAdmin";
import TablaCursos from "../components/TablaCursos";
import TablaUsuarios from "../components/TablaUsuarios";
import Tablita from "../components/Tablita";
import AgregarCurso from "../components/AgregarCurso";
import { useState } from "react";
import '../styles/Admin.css';  
import TablaJuegos from "../components/TablaJuegos";
import TablaNoticias from "../components/TablaNoticias";
import AgregarJuego from "../components/AgregarJuego";
import AgregarNoticias from "../components/AgregarNoticia";
import TablaTestimonios from "../components/TablaTestimonios";
import AgregarTestimonio from "../components/AgregarTestimonio";

function Admin(){
    // tablas
    const [mostrarTablaUsuarios,setMostrarTablaUsuarios] = useState(true);
    const [mostrarTablaCursos,setMostrarCursos] = useState(false);
    const [mostrarTablaJuegos,setMostrarTablaJuegos] = useState(false);
    const [mostrarTablaNoticias,setMostrarTablaNoticias] = useState(false);
    const [mostrarTablaTestimonios,setMostrarTablaTestimonios] = useState(false);
    //mostrar
    const [mostrarAgregarCurso,setMostrarAgregarCurso] = useState(false);
    const [mostrarAgregarJuegos,setMostrarAgregarJuegos] = useState(false);
    const [mostrarAgregarNoticias,setMostrarAgregarNoticias] = useState(false);
    const [mostrarAgregarTestimonios,setMostrarAgregarTestimonios] = useState(false);	

    function mostrarCambioUsuario(){
        setMostrarTablaUsuarios(!mostrarTablaUsuarios)
        setMostrarCursos(false)
        setMostrarAgregarCurso(false)
        setMostrarTablaJuegos(false)
        setMostrarAgregarJuegos(false)
        setMostrarTablaNoticias(false) 
        setMostrarAgregarNoticias(false) 
        setMostrarTablaTestimonios(false)
        setMostrarAgregarTestimonios(false)
    }
    function mostrarCambioCursos(){
        setMostrarCursos(!mostrarTablaCursos)
        setMostrarTablaUsuarios(false)
        setMostrarAgregarCurso(false)
        setMostrarAgregarJuegos(false)
        setMostrarTablaJuegos(false)
        setMostrarTablaNoticias(false)
        setMostrarAgregarNoticias(false)
        setMostrarTablaTestimonios(false)
        setMostrarAgregarTestimonios(false)
        setMostrarTablaTestimonios(false)
    }
    function mostrarCambioJuegos(){
        setMostrarTablaJuegos(!mostrarTablaJuegos)
        setMostrarTablaUsuarios(false)
        setMostrarCursos(false)
        setMostrarAgregarCurso(false)
        setMostrarAgregarJuegos(false)
        setMostrarTablaNoticias(false)
        setMostrarAgregarNoticias(false)
        setMostrarTablaTestimonios(false)
        setMostrarAgregarTestimonios(false)
    }
    function mostrarCambioNoticias(){
        setMostrarTablaNoticias(!mostrarTablaNoticias)
        setMostrarTablaUsuarios(false)
        setMostrarCursos(false)
        setMostrarAgregarCurso(false)
        setMostrarTablaJuegos(false)
        setMostrarAgregarJuegos(false)      
        setMostrarAgregarNoticias(false)
        setMostrarTablaTestimonios(false)
        setMostrarAgregarTestimonios(false)
    }   
    function mostrarCambioTestimonios(){
        setMostrarTablaTestimonios(!mostrarTablaTestimonios)
        setMostrarTablaUsuarios(false)
        setMostrarCursos(false)
        setMostrarAgregarCurso(false)
        setMostrarTablaJuegos(false)
        setMostrarAgregarJuegos(false)      
        setMostrarAgregarNoticias(false)
        setMostrarTablaNoticias(false) 
        setMostrarAgregarTestimonios(false)
    }   


    function mostrarFormularioCurso(){
        setMostrarAgregarCurso(!mostrarAgregarCurso)
        setMostrarTablaUsuarios(false)
        setMostrarCursos(false)
        setMostrarTablaJuegos(false)
        setMostrarAgregarJuegos(false)
        setMostrarTablaNoticias(false)  
        setMostrarAgregarNoticias(false)   
        setMostrarTablaTestimonios(false) 
        setMostrarAgregarTestimonios(false)
        
    }   

    function mostrarFormularioJuegos(){
        setMostrarAgregarJuegos(!mostrarAgregarJuegos)
        setMostrarTablaUsuarios(false)
        setMostrarCursos(false)
        setMostrarTablaJuegos(false)
        setMostrarAgregarCurso(false)
        setMostrarTablaNoticias(false)
        setMostrarAgregarNoticias(false)
        setMostrarTablaTestimonios(false)
        setMostrarAgregarTestimonios(false)
    }
    function mostrarFormularioNoticias(){
        setMostrarAgregarNoticias(!mostrarAgregarNoticias)
        setMostrarTablaUsuarios(false)
        setMostrarCursos(false)
        setMostrarTablaJuegos(false)
        setMostrarAgregarCurso(false)
        setMostrarAgregarJuegos(false)
        setMostrarTablaNoticias(false)  
        setMostrarTablaTestimonios(false)
        setMostrarAgregarTestimonios(false)

    }

    function mostrarFormularioTestimonios(){
        setMostrarAgregarTestimonios(!mostrarAgregarTestimonios)
        setMostrarTablaUsuarios(false)
        setMostrarCursos(false)
        setMostrarTablaJuegos(false)
        setMostrarAgregarCurso(false)
        setMostrarAgregarJuegos(false)
        setMostrarTablaNoticias(false)  
        setMostrarAgregarNoticias(false) 
        setMostrarTablaTestimonios(false)
        setMostrarTablaUsuarios(false)
        setMostrarCursos(false)
        
    }

    return(
        <>

        <SidebarAdmin mostrarUsuarios={mostrarCambioUsuario} mostrarCursos={mostrarCambioCursos} mostrarJuegos={mostrarCambioJuegos} mostrarNoticias={mostrarCambioNoticias} mostrarTestimonios={mostrarCambioTestimonios}  mostrarAgregarCurso={mostrarFormularioCurso} mostrarAgregarJuegos={mostrarFormularioJuegos}  mostrarAgregarNoticias ={mostrarFormularioNoticias} mostrarAgregarTestimonios={mostrarFormularioTestimonios} />
        
        <div className="contenedor-tablitas">

        {mostrarTablaUsuarios && <Tablita/>}

        {mostrarTablaCursos && <TablaCursos/>}

        {mostrarAgregarCurso && <AgregarCurso/>}

        {mostrarTablaJuegos && <TablaJuegos/>}

        {mostrarAgregarJuegos && <AgregarJuego/>}

        {mostrarTablaNoticias && <TablaNoticias/>}

        {mostrarAgregarNoticias && <AgregarNoticias/>}  

        {mostrarTablaTestimonios && <TablaTestimonios/>}  

        {mostrarAgregarTestimonios && <AgregarTestimonio/>   }

        </div>

        
        </>
    )
}
export default Admin;