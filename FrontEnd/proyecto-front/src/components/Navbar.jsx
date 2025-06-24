
import '../styles/Navbar.css'
import { Navigate, useNavigate} from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
    return (
        <>
           <nav className='navbar-contenedor'>
              <ul className='navbar-lista'>
              <img  alt="" />

              <h1 className='titulo'>Ahorropata</h1>

                <button >Crear Cuenta</button>
                <button className="btn-perfil" onClick={() => navigate('/perfil')}>🦝yo</button>

              </ul>
           </nav>
        </>
    )
}
export default Navbar;