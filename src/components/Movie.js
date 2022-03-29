import useFetchMovies from "../hooks/useFetchMovies";
import CardMovie from "./CardMovie";
import { cortarArray } from "../utils/Variables";
import { TiArrowRightOutline as FlechaVerMas } from "react-icons/ti";
import { Link } from "react-router-dom";

const Movie = ()=>{
    const { peliculas: moviesPopulares } = useFetchMovies("movie", "popular");
    const { peliculas: moviesTopRated } = useFetchMovies("movie", "top_rated");
    const { peliculas: moviesUpcoming } = useFetchMovies("movie", "upcoming");

    return (
        <div>
            <Link>
                <FlechaVerMas />
            </Link>
           <CardMovie/>
        </div>
    )
}

export default Movie;