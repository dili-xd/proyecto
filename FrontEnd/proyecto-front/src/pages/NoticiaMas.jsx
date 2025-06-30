import ListaComentariosCursos from "../components/ListaComentariosCursos";
import { useState, useEffect } from "react";
import { getData } from "../servicios/fetch";
import Navbar from "../components/Navbar";
import PartSupMas from "../components/PartSupMas";
import "../styles/NoticiasMas.css";
import ModalCalificarNoticia from "../components/ModalCalificarNoticia";
function NoticiaMas() {
  const [noticiasComentarios, setNoticiasComentarios] = useState([]);
  const [infoNoticia, setInfoNoticia] = useState([]);
  const [recarga, setRecarga] = useState(false);
  useEffect(() => {
    async function traerNoticia() {
      const peticion = await getData(
        "apiNoticias/noticia",
        localStorage.getItem("noticiaId") + "/"
      );
      setInfoNoticia(peticion);
      console.log(peticion);
    }
    async function traerComentatrioNoticia() {
      const peticion = await getData("apiNoticias/calificar_noticia");
      const filtradoNoticias = await peticion.filter(
        (noticia) => noticia.noticia == localStorage.getItem("noticiaId")
      );
      setNoticiasComentarios(filtradoNoticias);
    }
    traerComentatrioNoticia();
    traerNoticia();
  }, [recarga]);
  return (
 <>
  <Navbar />
  <div className="contentedor-noticia-mas">     
    <div className="contenido-noticia">
      <PartSupMas titulo={infoNoticia.titulo} img={infoNoticia.img} descripcion={infoNoticia.contenido}/>
    </div>
    <div className="comentarios-noticia">
      <h2>Comentarios</h2>
      <div className="comentarios-lista">
      {noticiasComentarios.length > 0 ? (
        <ListaComentariosCursos
          datos={noticiasComentarios}
          endpointUrlEliminar={"apiNoticias/eliminar_calificacion_noticia/"}
          endpointUrlEditar={"apiNoticias/editar_calificacion_noticia/"}
          recarga={recarga}
          setRecarga={setRecarga}
        />
      ) : (
        <h1>NO HAY COMENTARIOS</h1>
      )}
      </div>
    </div>
  </div>
</>
  );
}
export default NoticiaMas;