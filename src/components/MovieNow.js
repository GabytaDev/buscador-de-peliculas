import useFetchMovies from '../hooks/useFetchMovies';
import usePaginado from '../hooks/usePaginado';
import CardMovie from './CardMovie';
import Paginado from './Paginado';
import "../styles/_Card.scss";

const MovieNow = () => {
    const { page, handleClickPrimerPagina, handleClickPrev, handleClickNext, handleClickUltimaPagina } = usePaginado()
    const { peliculas: moviesNowPlaying, totalPages } = useFetchMovies("movie", "now_playing", page);

    return (
        <div>
            <div className='container-titulo-link'>
                <h2 className="titulo-cards">Peliculas en el cine</h2>
            </div>
            <CardMovie
                peliculas={moviesNowPlaying}
            />
            <Paginado
                handleClickPrimerPagina={handleClickPrimerPagina}
                handleClickPrev={handleClickPrev}
                handleClickNext={handleClickNext}
                handleClickUltimaPagina={handleClickUltimaPagina}
                page={page}
                totalPages={totalPages}
            />
        </div>
    )
}

export default MovieNow;