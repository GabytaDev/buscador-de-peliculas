
import "../styles/_ListadoMovies.scss"
import portadaNotfound from "../images/portadaNotfound.jpeg"
import { Link } from "react-router-dom";
import { IoIosArrowDroprightCircle as Flecha } from "react-icons/io";


const ListadoMovies = ({titulo, peliculas})=>{
    
    return (
        <div>
            <h2 className="titulo-container">{titulo}</h2>
            <div className="contenedor-listado">
                {peliculas.map(pelicula => (
                    <Link  to={`/movie/${pelicula.id}`} key={pelicula.id} className="listado">
                        <ul className="listado-ul">
                            <li className="item-listado">
                                {pelicula.poster_path ?
                                <img src= {`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}
                                 className="contenedor-imagen-listado"
                                 alt={pelicula.title}></img>
                                : <img src={portadaNotfound} className="contenedor-imagen-not-found"></img>} 
                                <p>{pelicula.title}</p>  
                            </li>    
                        </ul>
                        <Flecha className="icono-flecha-detalle"/>
                    </Link>
                    
                ))}
                
            </div>
        </div>
    )
}

export default ListadoMovies;