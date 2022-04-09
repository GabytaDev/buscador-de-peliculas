import useFetchMovies from '../hooks/useFetchMovies';
import usePaginado from '../hooks/usePaginado';
import CardMovie from './CardMovie';
import Paginado from './Paginado';
import "../styles/_Card.scss";

const MovieUpComing = () => {
    const { page, handleClickPrimerPagina, handleClickPrev, handleClickNext, handleClickUltimaPagina } = usePaginado()
    const { peliculas: moviesUpComing, totalPages } = useFetchMovies("movie", "upcoming", page);

    return (
        <div>
            <div className='container-titulo-link'>
                <h2 className="titulo-cards">Peliculas a estrenar</h2>
            </div>
            <CardMovie
                peliculas={moviesUpComing}
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

export default MovieUpComing;