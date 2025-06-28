import Footer from "../components/Footer";
import FormInicio from "../components/FormInicio";
import Navbar from "../components/Navbar";
import "../styles/Sesion.css";
function Sesión(){
    return(
        <>
        <Navbar/>
        <div className="contenedor-formInicio">
         <FormInicio/>
          <div className="imagen-sesion">
            <img src='https://plus.unsplash.com/premium_photo-1677265809324-4cc68b8cc4e7?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Sesión;