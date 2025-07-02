import CardComponente from '../components/CardComponente';
import Footer from '../components/Footer';
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
            <h2 className='noticias'>Noticias</h2>
            <div className='listaNoticias'>
                <ListaCardsNoticias/>
            </div>
            <h2 className='noticias'>Cursos</h2>
            <div className='listaNoticias'>
                <ListaCardsCursos/>
            </div>
            <h2 className='noticias'>Juegos</h2>
            <div className='listaNoticias'>
                <ListaCardsJuegos/>



            </div>
            <div className='footer-contenedorH'>
            <Footer/>
            </div>
        </div>  
        </>
    )
}
export default Home;