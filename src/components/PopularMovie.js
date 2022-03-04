import { useState, useEffect } from "react";
//https://api.themoviedb.org/3/movie/550?api_key=90d7b1e3c47854073e093a7f557291b5
import { Link } from "react-router-dom";


const PopularMovie = () => {

    const [peliculasPopulares, setPeliculasPopulares] = useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=90d7b1e3c47854073e093a7f557291b5&language=es`)
            .then(res => res.json())
            .then(data => setPeliculasPopulares(data.results))
    }, [])

    return (
        <div>
            <h2 className="titulo-container">Peliculas Populares</h2>
            <div className="contenedor-listado">
                {peliculasPopulares.map(pelicula => (

                    <Link  to={`/movie/${pelicula.id}`} key={pelicula.id}>
                        <ul className="listado">
                            <li className="item-listado">
                                <img src={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`} className="contenedor-imagen-listado"></img>
                                <h3>{pelicula.original_title}</h3>  
                            </li>
                        </ul>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default PopularMovie;