import useFetchMovies from '../hooks/useFetchMovies';
import usePaginado from '../hooks/usePaginado';
import CardMovie from './CardMovie';
import "../styles/_Card.scss";
import Paginado from './Paginado';


const MoviePopular = () => {
    
    const {page, handleClickPrimerPagina, handleClickPrev, handleClickNext,handleClickUltimaPagina} = usePaginado()
    const { peliculas: moviesPopular , totalPages } = useFetchMovies("movie", "popular", page);
   
    return (
        <div>
            <div className='container-titulo-link'>
                <h2 className="titulo-cards">Peliculas populares</h2>
            </div>
            <CardMovie
                peliculas={moviesPopular}
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

export default MoviePopular;