import useFetchMovies from "../hooks/useFetchMovies";
import CardMovie from "./CardMovie";
import { cortarArray } from "../utils/Variables";
import { TiArrowRightOutline as FlechaVerMas } from "react-icons/ti";
import { Link } from "react-router-dom";
import "../styles/_Card.scss";

const Movie = () => {
    const page =(1)

    const { peliculas: moviesPopular } = useFetchMovies("movie", "popular", page);
    const { peliculas: moviesTopRated  } = useFetchMovies("movie", "top_rated",page);
    const { peliculas: moviesUpComing } = useFetchMovies("movie", "upcoming", page);
    const { peliculas: moviesNowPlaying } = useFetchMovies("movie", "now_playing", page);

    return (
        <div>
            <div className="container-titulo-link">
                <h2 className="titulo-cards">Peliculas populares</h2>
                <Link to="popular">
                    <FlechaVerMas className="flecha-ver-mas" />
                </Link>
            </div>
            <CardMovie
                peliculas={cortarArray(moviesPopular)}
            />
            <div className="container-titulo-link">
                <h2 className="titulo-cards">Peliculas con mejores criticas</h2>
                <Link to="top_rated">
                    <FlechaVerMas className="flecha-ver-mas" />
                </Link>
            </div>
            <CardMovie
                peliculas={cortarArray(moviesTopRated)}
            />
            <div className="container-titulo-link">
                <h2 className="titulo-cards">Peliculas a estrenar</h2>
                <Link to="upcoming">
                    <FlechaVerMas className="flecha-ver-mas" />
                </Link>
            </div>
            <CardMovie
                peliculas={cortarArray(moviesUpComing)} 
            />
            <div className="container-titulo-link">
                <h2 className="titulo-cards">Peliculas en el cine</h2>
                <Link to="now_playing">
                    <FlechaVerMas className="flecha-ver-mas" />
                </Link>
            </div>
            <CardMovie
                peliculas={cortarArray(moviesNowPlaying)} 
            />
        </div>
    )
}

export default Movie;