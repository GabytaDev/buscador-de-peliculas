import useFetchMovies from "../hooks/useFetchMovies";
import ListadoMovies from "./ListadoMovies";
import Loader from "./Loader";
import "../styles/_ListadoMovies.scss";
import "../styles/_MoviesHome.scss"
import "../styles/_Loader.scss";

const MoviesHome = () => {
    const { peliculas, isLoading } = useFetchMovies("movie", "popular");
    const { peliculas: ultimasPeliculas } = useFetchMovies("movie", "upcoming");

    return (
        <div>
            <Loader isLoading={isLoading} />
            {!isLoading &&
                <div className="container-general">
                    <div className="box-container">
                        <ListadoMovies
                            titulo="Peliculas Populares"
                            categoria="movie"
                            tipo="popular"
                            peliculas={peliculas}
                            isLoading={isLoading}
                        />
                    </div>
                    <div className="box-container">

                        <ListadoMovies
                            titulo="Próximos lanzamientos"
                            categoria="movie"
                            tipo="upcoming"
                            peliculas={ultimasPeliculas}
                            isLoading={isLoading}
                        />
                    </div>
                </div>
            }
        </div>

    )
}
export default MoviesHome;