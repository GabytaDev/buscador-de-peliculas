import "../styles/_ListadoMovies.scss";
import portadaNotfound from "../images/portadaNotfound.jpeg"
import { Link } from "react-router-dom";
import { IoIosArrowDroprightCircle as Flecha } from "react-icons/io";

const ListadoSeries = ({ titulo, peliculas, isLoading }) => {

    return (
        <div className="position-relative">
            <h2 className="titulo-container">{titulo}</h2>
            <div className="contenedor-listado">
                {!isLoading &&
                    peliculas.map(serie => (
                        <Link to={`/tv/${serie.id}`} key={serie.id} className="listado">
                            <ul className="listado-ul">
                                <li className="item-listado">
                                    {serie.poster_path ?
                                        <img src={`https://image.tmdb.org/t/p/w200/${serie.poster_path}`}
                                            className="contenedor-imagen-listado" alt={serie.name}></img>
                                        : <img src={portadaNotfound} className="contenedor-imagen-not-found"></img>}
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