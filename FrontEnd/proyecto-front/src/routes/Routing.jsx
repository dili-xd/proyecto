import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Sesion from '../pages/sesion';

function Routing(){
    return(             
         <Router>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/iniciar' element={<Sesion/>}/>
            </Routes>
        </Router>
    )
}
export default Routing;


