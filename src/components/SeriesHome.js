import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDroprightCircle as Flecha } from "react-icons/io";

const SeriesHome = ({titulo, url})=>{
    const [seriesPopulares, setSeriesPopulares] = useState([])
    useEffect(()=>{
     fetch(`https://api.themoviedb.org/3/tv/${url}?api_key=90d7b1e3c47854073e093a7f557291b5&language=es-AR&page=1`)
     .then(res => res.json())
     .then(data => setSeriesPopulares(data.results))   
    },[])

    return (
        <div className="box-container">
            <h2 className="titulo-container">{titulo}</h2>
            <div className="contenedor-listado">
                {seriesPopulares.map(serie => (
                    <Link  to={`/tv/${serie.id}`} key={serie.id} className="listado">
                        <ul className="listado-ul">
                            <li className="item-listado">
                                <img src={`https://image.tmdb.org/t/p/w200/${serie.poster_path}`} className="contenedor-imagen-listado" alt="poster serie"></img>
                                <p>{serie.original_name}</p>  
                            </li>    
                        </ul>
                        <Flecha className="icono-flecha-detalle"/>
                    </Link>
                ))}
                
            </div>
        </div>
    )
}
export default SeriesHome;