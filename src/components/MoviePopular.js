import useFetchMovies from '../hooks/useFetchMovies';
import CardMovie from './CardMovie';
import "../styles/_Card.scss";
import Paginado from './Paginado';
import usePaginado from '../hooks/usePaginado';

const MoviePopular = () => {

    const { peliculas: moviesPopular } = useFetchMovies("movie","popular",1);
    const {page:page,
        handleClickPrimerPagina,
        handleClickPrev,
        handleClickNext,
        handleClickUltimaPagina,
        totalPages} = usePaginado()

    return (
        <div>
            <div className='container-titulo-link'>
            <h2 className="titulo-cards">Peliculas populares</h2>
            </div>
            <CardMovie
                peliculas={moviesPopular}
            />
            <Paginado
            page={page}
            handleClickPrimerPagina={handleClickPrimerPagina}
            handleClickPrev={handleClickPrev}
            handleClickNext={handleClickNext}
            handleClickUltimaPagina={handleClickUltimaPagina}
            totalPages={totalPages}
            />
        </div>
    )
}

export default MoviePopular;