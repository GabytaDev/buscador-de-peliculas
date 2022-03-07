import "../styles/_ListadoMovies.scss"
import { Link } from "react-router-dom";
import { IoIosArrowDroprightCircle as Flecha } from "react-icons/io";
import { useState, useEffect } from "react";

const ListadoMovies = ({titulo,url})=>{
    const [peliculasPopulares, setPeliculasPopulares] = useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${url}?api_key=90d7b1e3c47854073e093a7f557291b5&language=es-AR&page=1`)
            .then(res => res.json())
            .then(data => setPeliculasPopulares(data.results))
    }, [])

    return (
        <div>
            <h2 className="titulo-container">{titulo}</h2>
            <div className="contenedor-listado">
                {peliculasPopulares.map(pelicula => (
                    <Link  to={`/movie/${pelicula.id}`} key={pelicula.id} className="listado">
                        <ul className="listado-ul">
                            <li className="item-listado">
                                <img src={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`} className="contenedor-imagen-listado" alt="poster pelicula"></img>
                                <p>{pelicula.original_title}</p>  
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