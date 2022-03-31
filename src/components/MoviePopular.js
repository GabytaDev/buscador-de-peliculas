import useFetchMovies from '../hooks/useFetchMovies';
import CardMovie from './CardMovie';
import "../styles/_Card.scss";

const MoviePopular = () => {

    const { peliculas: moviesPopular } = useFetchMovies("movie", "popular");

    return (
        <div>
            <div className='container-titulo-link'>
            <h2 className="titulo-cards">Peliculas populares</h2>
            </div>
            <CardMovie
                peliculas={moviesPopular}
            />
        </div>
    )
}

export default MoviePopular;