import useFetchMovies from "../hooks/useFetchMovies";
import CardTv from "./CardTv";
const TvRanking = ()=>{
    const {peliculas: seriesTopRated} = useFetchMovies("tv", "top_rated");
    
    return(
        <div>
            <CardTv
                peliculas={seriesTopRated} />
       </div>
    )
}

export default TvRanking;