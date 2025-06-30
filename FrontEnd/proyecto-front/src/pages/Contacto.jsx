import React from 'react';
import "../styles/Contacto.css"

function Contacto() {
  return (
    <div className="contacto-contenedor">
      <h2 className="contacto-titulo">¿Necesitás ayuda?</h2>

      <p className="contacto-texto">
        Si tenés problemas para ingresar, registrarte o la página no carga bien, no te preocupés.
        A veces con unos pasos simples se puede solucionar.
      </p>

      <ul className="contacto-lista">
        <li>Revisá tu conexión a internet.</li>
        <li>Probá abrir la página en otro navegador (como Chrome o Firefox).</li>
        <li>Borrá caché y cookies si sigue fallando.</li>
        <li>Asegurate de completar todos los campos si estás creando un usuario.</li>
      </ul>

      <p className="contacto-texto">
        Si el problema continúa, podés escribirnos y con gusto te ayudamos:
      </p>

      <div className="contacto-datos">
        <p><strong>📧 Correo:</strong> soporte@tuejemplo.com</p>
        <p><strong>📱 WhatsApp:</strong> +506 8765 4321</p>
        <p><strong>🕐 Horario:</strong> Lunes a viernes, 8 a.m. a 5 p.m.</p>
      </div>
    </div>
  );
}

export default Contacto