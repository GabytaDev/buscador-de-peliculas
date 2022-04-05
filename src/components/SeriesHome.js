import useFetchMovies from "../hooks/useFetchMovies";
import ListadoSeries from "./ListadoSeries";
import Loader from "./Loader";
import "../styles/_ListadoMovies.scss";
import "../styles/_MoviesHome.scss";
import "../styles/_Loader.scss";

const SeriesHome = () => {
    const { peliculas: series, isLoading } = useFetchMovies("tv", "popular");
    const { peliculas: seriesTopRated } = useFetchMovies("tv", "top_rated");
    return (
        <div>
            <Loader isLoading={isLoading} />
            {!isLoading &&
                <div className="container-general">
                    <div className="box-container">
                        <ListadoSeries
                            titulo="Series Populares"
                            peliculas={series}
                            isLoading={isLoading}
                        />
                    </div>
                    <div className="box-container">
                        <ListadoSeries
                            titulo="Series Mejor Puntuadas"
                            peliculas={seriesTopRated}
                            isLoading={isLoading}
                        />
                    </div>
                </div>
            }
        </div>

    )
}
export default SeriesHome;