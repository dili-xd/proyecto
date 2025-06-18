import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Sesion from '../pages/sesion';
import RutaPrivada from './RutaPrivada';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import Perfil from '../pages/Perfil';

function Routing(){
    return(             
         <Router>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/iniciar' element={<Sesion/>}/>
                <Route path='/admin' element={<RutaPrivada rol="administradores" children={<Admin/>}/> } />
                <Route path='/perfil' element={<Perfil  />}/>
                <Route path='/home' element={<RutaPrivada rol={["usuarios","profesores","administradores","None"]} children={<Home/>}/>}/>
            </Routes>
        </Router>
    )
}
export default Routing;


