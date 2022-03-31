import useFetchMovies from '../hooks/useFetchMovies';
import CardMovie from './CardMovie';
import "../styles/_Card.scss";

const MovieNow = () => {

    const { peliculas: moviesNowPlaying } = useFetchMovies("movie", "now_playing",1);

    return (
        <div>
            <div className='container-titulo-link'>
            <h2 className="titulo-cards">Peliculas en el cine</h2>
            </div>
            <CardMovie
                peliculas={moviesNowPlaying}
            />
        </div>
    )
}

export default MovieNow;