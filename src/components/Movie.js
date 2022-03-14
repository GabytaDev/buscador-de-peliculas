import "../styles/_Movie.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
    const params = useParams()
    const [peliculas, setPeliculas] = useState([])
   

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.idPelicula}?api_key=90d7b1e3c47854073e093a7f557291b5&language=es-ES`)
            .then(res => res.json())
            .then(data => setPeliculas(data))
            
    }, [])

    return (
        <div>
            <div className="container-background-movie">
                <img src={`https://image.tmdb.org/t/p/original/${peliculas.backdrop_path}`} className="img-fondo"></img>
            
            <section className="container-movie">
                <div className="content-img">
                    <img src={`https://image.tmdb.org/t/p/w300/${peliculas.poster_path}`} alt="poster de pelicula batman"></img>
                </div>
                <article className="content-info-movie">
                    <h2 className="title-movie">{peliculas.title}</h2>
                    <h4 className="subtitle-movie">General:</h4>
                    <p className="text-detalle">{peliculas.overview}</p>
                    <h4 className="subtitle-movie">Duración:</h4> 
                    <p className="text-detalle">{peliculas.runtime} min</p>
                    <h4 className="subtitle-movie">Producción: </h4>
                   
                    <div className="text-detalle">
                        {peliculas.production_companies?.map(produccion => (
                            <span key={produccion.id}>{produccion.name}, </span>
                            
                        ))}
                    </div>
                    
                    <h4 className="subtitle-movie">Géneros:</h4>
                    <div className="text-detalle">
                    {peliculas.genres?.map(genero => (
                        <span key={genero.id}>{genero.name}, </span>
                    ))}
                    </div>
                </article>
            </section>
            </div>
        </div>
    )
}
export default Movie;