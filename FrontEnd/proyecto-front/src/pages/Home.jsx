import CardComponente from '../components/CardComponente';
import ListaCardsCursos from '../components/ListaCardsCursos';
import ListaCardsJuegos from '../components/ListaCardsJuegos';
import ListaCardsNoticias from '../components/ListaCardsNoticias';
import Navbar from '../components/Navbar';
import "../styles/Home.css"
function Home(){
    return(
        <>
        <Navbar/>

        <div className='home-contenedor'>
            <h2>Noticias</h2>
            <div className='listaNoticias'>
                <ListaCardsNoticias/>
            </div>
            <h2>Cursos</h2>
            <div className='listaNoticias'>
                <ListaCardsCursos/>
            </div>
            <h2>Juegos</h2>
            <div className='listaNoticias'>
                <ListaCardsJuegos/>

            </div>
        </div>  
        </>
    )
}
export default Home;