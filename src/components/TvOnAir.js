import useFetchMovies from "../hooks/useFetchMovies";
import CardTv from "./CardTv";
const TvOnAir = ()=>{
    const {peliculas: seriesOnTheAir} = useFetchMovies("tv", "on_the_air");
    
    return(
        <div>
            <CardTv
                peliculas={seriesOnTheAir} />
       </div>
    )
}

export default TvOnAir;