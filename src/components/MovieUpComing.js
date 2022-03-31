import useFetchMovies from '../hooks/useFetchMovies';
import CardMovie from './CardMovie';
import "../styles/_Card.scss";

const MovieUpComing = () => {

    const { peliculas: moviesUpComing } = useFetchMovies("movie", "upcoming",1);

    return (
        <div>
            <div className='container-titulo-link'>
            <h2 className="titulo-cards">Peliculas a estrenar</h2>
            </div>
            <CardMovie
                peliculas={moviesUpComing}
            />
        </div>
    )
}

export default MovieUpComing;