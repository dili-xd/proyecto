
 function RutaPrivada({children,rol}){
     function vallidarUsuario() {
         const Token = localStorage.getItem ('token');
         const roLU = localStorage.getItem('grupo_usuario');
            if (!Token){
                return false
            }
            if (Array.isArray(rol)) {
                return rol.includes(roLU);
            }
            if (roLU === rol) {
                return true;
            }
            return false
     }
    return(
        vallidarUsuario() ? children:<h1>NO NO NO </h1>
    )
 }
 export default RutaPrivada;