import '../styles/PartSupMas.css';
function PartSupMas({titulo,img,descripcion}) {
    return(
        <>
            <div className="partesuperior">
                <h2>{titulo}</h2>
                <img src={img} alt="Imagen de la noticia" />
                <p>{descripcion}</p>
            </div>
        </>
    )
}
export default PartSupMas;