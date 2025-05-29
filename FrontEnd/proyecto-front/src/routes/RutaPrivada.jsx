
 function RutaPrivada({children}){
     function vallidarUsuario() {
         const Token = localStorage.getItem ('token');
            if (!Token){
                return false
            }
            return true
     }
    return(
        vallidarUsuario()? children:<h1>NO NO NO </h1>
    )
 }
 export default RutaPrivada;