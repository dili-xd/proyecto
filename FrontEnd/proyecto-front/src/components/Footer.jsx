import "../styles/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer-contenedor">
      <ul className="lista-enlaces">
        <section className="foder-lista">
          <div className="enlace-con-icono">
            <Link to="/contacto">Contacto</Link>
            <img src="../src/assets/imgs/imgcontacto.png" alt="Contacto" />
          </div>
        </section>
        <section className="foder-lista">
          <div className="enlace-con-icono">
            <Link to="/nosotros">Sobre Nosotros</Link>
            <img src="../src/assets/imgs/imgnosotros.png" alt="Nosotros" />
          </div>
        </section>
        <section className="foder-lista derechos">
          <li>Todos los derechos reservados</li>
        </section>
        <section className="foder-lista">
          <div className="enlace-con-icono">
          
            <img src="../src/assets/imgs/imgayuda.png" alt="Ayuda" />
          </div>
        </section>
      </ul>
    </footer>
  );
}
export default Footer;
