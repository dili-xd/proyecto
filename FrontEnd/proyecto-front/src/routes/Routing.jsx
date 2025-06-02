import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Sesion from '../pages/sesion';
import RutaPrivada from './RutaPrivada';
import Home from '../pages/Home';
import Admin from '../pages/Admin';

function Routing(){
    return(             
         <Router>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/iniciar' element={<Sesion/>}/>
                <Route path='/admin' element={<Admin />}/>
                <Route path='/prueba' element={<RutaPrivada children={<Home/>}/>}/>
            </Routes>
        </Router>
    )
}
export default Routing;


