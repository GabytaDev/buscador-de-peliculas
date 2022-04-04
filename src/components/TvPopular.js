import useFetchMovies from "../hooks/useFetchMovies";
import usePaginado from '../hooks/usePaginado';
import CardTv from "./CardTv";
import Paginado from './Paginado';
import "../styles/_Card.scss";

const TvPopular = ()=>{
    const {page, handleClickPrimerPagina, handleClickPrev, handleClickNext,handleClickUltimaPagina} = usePaginado()
    const {peliculas: seriesPopulares, totalPages} = useFetchMovies("tv", "popular", page);
    
    return(
        <div>
             <div className='container-titulo-link'>
            <h2 className="titulo-cards">Series populares</h2>
            </div>
            <CardTv
                peliculas={seriesPopulares}
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

export default TvPopular;