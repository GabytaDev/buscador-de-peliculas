import useFetchMovies from '../hooks/useFetchMovies';
import usePaginado from '../hooks/usePaginado';
import CardMovie from './CardMovie';
import "../styles/_Card.scss";
import Paginado from './Paginado';

const MovieTopRated = () => {
    const {page, handleClickPrimerPagina, handleClickPrev, handleClickNext,handleClickUltimaPagina} = usePaginado()
    const { peliculas: moviesTopRated, totalPages } = useFetchMovies("movie","top_rated",page);
    
    
    return (
        <div>
            <div className='container-titulo-link'>
            <h2 className="titulo-cards">Peliculas con mejores criticas</h2>
            </div>
            <CardMovie
                peliculas={moviesTopRated}
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

export default MovieTopRated;