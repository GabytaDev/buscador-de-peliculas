
import "../styles/_ListadoMovies.scss"
import { Link } from "react-router-dom";
import { IoIosArrowDroprightCircle as Flecha } from "react-icons/io";
import { MdImageNotSupported as ImgNotfound } from "react-icons/md";


const ListadoMovies = ({titulo, peliculas})=>{
    
    return (
        <div>
            <h2 className="titulo-container">{titulo}</h2>
            <div className="contenedor-listado">
                {peliculas.map(pelicula => (
                    <Link  to={`/movie/${pelicula.id}`} key={pelicula.id} className="listado">
                        <ul className="listado-ul">
                            <li className="item-listado">
                                <img src= {`${pelicula.poster_path} 
                                ? https://image.tmdb.org/t/p/w200/${pelicula.poster_path} 
                                : ${< ImgNotfound/>} `} 
                                className="contenedor-imagen-listado" 
                                alt="poster pelicula"></img>

                                {/* <img src= {`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}
                                 className="contenedor-imagen-listado"
                                 alt="poster pelicula"></img> */}

                                <p>{pelicula.original_title}</p>  
                            </li>    
                        </ul>
                        <Flecha className="icono-flecha-detalle"/>
                    </Link>
                    //serie.poster_path ? Url con poster path : imagen backup
                ))}
                
            </div>
        </div>
    )
}

export default ListadoMovies;