import useFetchMovies from "../hooks/useFetchMovies";
import usePaginado from '../hooks/usePaginado';
import CardTv from "./CardTv";
import Paginado from './Paginado';
const TvOnAir = ()=>{
    const {page, handleClickPrimerPagina, handleClickPrev, handleClickNext,handleClickUltimaPagina} = usePaginado()
    const {peliculas: seriesOnTheAir, totalPages} = useFetchMovies("tv", "on_the_air", page);
    
    return(
        <div>
            <CardTv
                peliculas={seriesOnTheAir}
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

export default TvOnAir;