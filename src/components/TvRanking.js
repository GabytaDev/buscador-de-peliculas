import useFetchMovies from "../hooks/useFetchMovies";
import usePaginado from "../hooks/usePaginado";
import CardTv from "./CardTv";
import Paginado from "./Paginado";
const TvRanking = ()=>{
    const {page, handleClickPrimerPagina, handleClickPrev, handleClickNext,handleClickUltimaPagina} = usePaginado()
    const {peliculas: seriesTopRated, totalPages} = useFetchMovies("tv", "top_rated", page);
    
    return(
        <div>
            <CardTv
                peliculas={seriesTopRated}
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

export default TvRanking;