
import '../styles/Navbar.css'
import { Navigate, useNavigate} from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
    return (
        <>
           <nav className='navbar-contenedor'>
              <ul className='navbar-lista'>
              <img src="../src/assets/imgs/imgNavbar.png" alt="Navbar" />

              <h1 className='titulo' onClick={()=>navigate("/home")}>AhorrAsí</h1>

                
                <button className="btn-perfil" onClick={() => navigate('/perfil')}>Perfil</button>

              </ul>
           </nav>
        </>
    )
}
export default Navbar;