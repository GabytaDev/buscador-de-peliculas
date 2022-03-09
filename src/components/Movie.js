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
            </div>
            <section className="container-movie">
                <div className="content-img">
                    <img src={`https://image.tmdb.org/t/p/w200/${peliculas.poster_path}`}></img>
                </div>
                <article className="content-info-movie">
                    <h2>{peliculas.title}</h2>
                    <p>Información General {peliculas.overview}</p>
                    <p>Duración: {peliculas.runtime} min</p>
                    <p>Presupuesto: {peliculas.budget}</p>
                    <div>Géneros:
                        {peliculas.genres.map(genero=>(
                            <p>{genero.name}</p>
                        ))}
                    </div>
                            
                    
                </article>
            </section>
        </div>
    )
}
export default Movie;