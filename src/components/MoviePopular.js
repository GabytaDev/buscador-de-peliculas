import useFetchMovies from '../hooks/useFetchMovies';
import CardMovie from './CardMovie';
import "../styles/_Card.scss";

const MoviePopular = ()=>{

    const { peliculas: moviesPopular } = useFetchMovies("movie", "popular");

    return (
        <div> 
          <h2 className="titulo-cards">Peliculas populares</h2>
            <CardMovie
            peliculas={moviesPopular}
            />
        </div>
    )
}

export default MoviePopular;