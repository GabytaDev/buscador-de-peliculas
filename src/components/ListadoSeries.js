import "../styles/_ListadoMovies.scss";
import { Link } from "react-router-dom";
import { IoIosArrowDroprightCircle as Flecha } from "react-icons/io";
import { useState, useEffect } from "react";

const ListadoSeries = ({titulo,url}) => {

    const [listaSeries, setListaSeries] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${url}?api_key=90d7b1e3c47854073e093a7f557291b5&language=es-ES&page=1`)
            .then(res => res.json())
            .then(data => setListaSeries(data.results))
    }, [])

    return (
        <div>
            <h2 className="titulo-container">{titulo}</h2>
            <div className="contenedor-listado">
                 {listaSeries.map(serie => (
                        <Link to={`/tv/${serie.id}`} key={serie.id} className="listado">
                            <ul className="listado-ul">
                                <li className="item-listado">
                                    <img src={`https://image.tmdb.org/t/p/w200/${serie.poster_path}`} className="contenedor-imagen-listado" alt="poster serie"></img>
                                    <p>{serie.original_name}</p>
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