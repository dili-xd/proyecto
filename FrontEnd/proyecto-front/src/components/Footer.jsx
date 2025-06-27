import '../styles/Footer.css'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
     <footer className="footer-contenedor">
            <ul className='lista-enlaces'>
                <section className='foder-lista'>
                    <Link to="/contacto">Contacto</Link>
                    <img src="" alt="" />
                </section>
                <section className='foder-lista'>
                    <Link to="/nosotros">Sobre Nosotros</Link>
                    <img src="" alt="" />
                </section>
                <section className='foder-lista'>
                    <li>Todos los derechos reservados</li>
                </section>
                <section className='foder-lista'>
                    <Link to="/ayuda">Ayuda</Link>
                    <img src="" alt="" /> 
                </section>

            </ul>
     </footer>
    </>
  )
}

export default Footer;