import Navbar from "../components/Navbar";
import CardPerfilUsuario from "../components/CardPerfilUsuario";
import AgregarTestimonio from "../components/AgregarTestimonio";
import { useState } from "react";
import { Button } from "@mui/joy";
function Perfil(){
    const [aggTestimonio, setAggTestimonio] = useState(false);
    return(
        <>
            <Navbar/>
           <CardPerfilUsuario/>
           <Button onClick={()=>setAggTestimonio(!aggTestimonio)}>
                {aggTestimonio ? "Ocultar Formulario" : "Agregar Testimonio"}
              </Button>
            {aggTestimonio && <AgregarTestimonio/>}
        </>
    )
}
export default Perfil;  