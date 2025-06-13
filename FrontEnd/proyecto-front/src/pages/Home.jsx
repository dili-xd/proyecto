import CardComponente from '../components/CardComponente';
import ListaCardsNoticias from '../components/ListaCardsNoticias';
import Navbar from '../components/Navbar';
import "../styles/Home.css"
function Home(){
    return(
        <>
        <Navbar/>

        <div className='home-contenedor'>
            <div className='
            '>
                <ListaCardsNoticias/>
            </div>
        </div>  
        </>
    )
}
export default Home;