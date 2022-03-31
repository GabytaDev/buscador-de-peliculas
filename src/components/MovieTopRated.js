import useFetchMovies from '../hooks/useFetchMovies';
import CardMovie from './CardMovie';
import "../styles/_Card.scss";

const MovieTopRated = () => {

    const { peliculas: moviesTopRated } = useFetchMovies("movie","top_rated",1);

    return (
        <div>
            <div className='container-titulo-link'>
            <h2 className="titulo-cards">Peliculas con mejores criticas</h2>
            </div>
            <CardMovie
                peliculas={moviesTopRated}
            />
        </div>
    )
}

export default MovieTopRated;