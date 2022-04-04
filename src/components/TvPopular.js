import useFetchMovies from "../hooks/useFetchMovies";
import usePaginado from '../hooks/usePaginado';
import CardTv from "./CardTv";
import Paginado from './Paginado';

const TvPopular = ()=>{
    const {page, handleClickPrimerPagina, handleClickPrev, handleClickNext,handleClickUltimaPagina} = usePaginado()
    const {peliculas: seriesPopulares, totalPages} = useFetchMovies("tv", "popular", page);
    
    return(
        <div>
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