import "../styles/_ListadoMovies.scss";
import { Link } from "react-router-dom";
import { IoIosArrowDroprightCircle as Flecha } from "react-icons/io";
import { MdImageNotSupported as ImgNotfound } from "react-icons/md";
const ListadoSeries = ({titulo, peliculas}) => {


    return (
        <div>
            <h2 className="titulo-container">{titulo}</h2>
            <div className="contenedor-listado">
                 {peliculas.map(serie => (
                        <Link to={`/tv/${serie.id}`} key={serie.id} className="listado">
                            <ul className="listado-ul">
                                <li className="item-listado">
                                     {/* <img className="contenedor-imagen-listado" src= {`${serie.poster_path} 
                                     ? https://image.tmdb.org/t/p/w200/${serie.poster_path} 
                                     : ${<ImgNotfound className="contenedor-imagen-not-found"/>}`} 
                                    ></img> */}
                                   
                                    <img src={`https://image.tmdb.org/t/p/w200/${serie.poster_path}`}
                                     className="contenedor-imagen-listado" alt={serie.name}></img>
                                    <p>{serie.name}</p>
                                </li>
                            </ul>
                            <Flecha className="icono-flecha-detalle" />
                        </Link>
                    ))}

               
            </div>
        </div>
    )
}
export default ListadoSeries;