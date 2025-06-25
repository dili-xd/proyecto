import { useEffect, useState } from "react";
import CardComponente from "./CardComponente";
import { getData } from "../servicios/fetch";
import ModalCalificarJuego from "./ModalCalificarJuegos";
import { useNavigate } from "react-router-dom";

function ListaCardsJuegos(){
    const [juegos, setJuegos] = useState([])
    const [modalbrir, setModalAbrir] = useState(false)
    const [juegoCalificar, setJuegoCalificar] = useState(null)
    const navigate = useNavigate()
    function abrirModal(juego) {
        setModalAbrir(true)
        setJuegoCalificar(juego)
    }

    function cerrarModal() {
        setModalAbrir(false)
    }

    useEffect(()=>{
        async function obtenerJuegos() {
            const peticion = await getData ('apiCursos/juegos')
            setJuegos(peticion)
            console.log(peticion);
        }
        obtenerJuegos()
    },[])

    function verMasJuego(id) {
        localStorage.setItem("juegoId",id)
        navigate("/juego")
    }

    return(
        <>
        {juegos.map((juego) => {
            return(
                <CardComponente
                    key={juego.id}
                    titulo={juego.nombre}
                    descripcion={juego.descripcion}
                    nivel={juego.dificultad}    
                    img={juego.img}
                    calficar={() => abrirModal(juego)}
                    mostrarInscribir={false}
                    funcionVerMas={()=>verMasJuego(juego.id)}

                />
            )
        })}
        <ModalCalificarJuego juego={juegoCalificar} abrir={modalbrir} cerrar={cerrarModal}/>
        </>
    )

}
export default ListaCardsJuegos;
