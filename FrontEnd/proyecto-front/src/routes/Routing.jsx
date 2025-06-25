import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Sesion from '../pages/sesion';
import RutaPrivada from './RutaPrivada';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import Perfil from '../pages/Perfil';
import CursoMas from '../pages/CursoMas';
import JuegoMas from '../pages/JuegoMas';
import NoticiaMas from '../pages/NoticiaMas';
function Routing(){
    return(             
         <Router>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/iniciar' element={<Sesion/>}/>
                <Route path='/admin' element={<RutaPrivada rol="administradores" children={<Admin/>}/> } />
                <Route path='/perfil' element={<Perfil  />}/>
                <Route path='/curso' element={<CursoMas/>}/>
                <Route path='/juego' element={<JuegoMas/>}/>
                <Route path='/noticia' element={<NoticiaMas/>}/>
                <Route path='/home' element={<RutaPrivada rol={["usuarios","profesores","administradores","None"]} children={<Home/>}/>}/>
            </Routes>
        </Router>
    )
}
export default Routing;


