import useFetchMovies from "../hooks/useFetchMovies";
import CardTv from "./CardTv";
const TvPopular = ()=>{
    const {peliculas: seriesPopulares} = useFetchMovies("tv", "popular");
    
    return(
        <div>
            <CardTv
                peliculas={seriesPopulares} />
       </div>
    )
}

export default TvPopular;