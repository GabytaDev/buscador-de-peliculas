import useFetchMovies from "../hooks/useFetchMovies";
import CardTv from "./CardTv";
import {cortarArray} from "../utils/Variables"; 

const Tv = () => {
    const {peliculas: seriesPopulares} = useFetchMovies("tv", "popular", );
    const {peliculas: seriesTopRated} = useFetchMovies("tv", "top_rated", );
    const {peliculas: seriesOnTheAir} = useFetchMovies("tv", "on_the_air", );
   
    return (
        <div>
            <section> 
                  <CardTv
                  peliculas={cortarArray(seriesPopulares)}
                  titulo="Series Populares"
                 />  
            </section>
            <section>
                <CardTv
                  peliculas={cortarArray(seriesTopRated)}
                  titulo="Series con mejores criticas "
                 />  
            </section>
            <section>
                <CardTv
                  peliculas={cortarArray(seriesOnTheAir)}
                  titulo="Series al aire"
                 />  
            </section>
        </div>
    )
}
export default Tv;