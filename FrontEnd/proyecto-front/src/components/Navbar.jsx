
import '../styles/Navbar.css'
import { Navigate, useNavigate} from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
    return (
        <>
           <nav className='navbar-contenedor'>
              <ul className='navbar-lista'>
              <img  alt="" />

              <h1 className='titulo' onClick={()=>navigate("/home")}>Ahorropata</h1>

                
                <button className="btn-perfil" onClick={() => navigate('/perfil')}>🦝yo</button>

              </ul>
           </nav>
        </>
    )
}
export default Navbar;