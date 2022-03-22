import useFetchMovies from "../hooks/useFetchMovies";
import ListadoSeries from "./ListadoSeries";
import "../styles/_ListadoMovies.scss";
import "../styles/_MoviesHome.scss";


const SeriesHome = () => {
    const {peliculas: series} = useFetchMovies("tv", "popular");
    const {peliculas: seriesTopRated} = useFetchMovies("tv", "top_rated");
    return (
        <div className="container-general">
            <div className="box-container">
                <ListadoSeries
                    titulo="Series Populares"
                    peliculas={series}
                />
            </div>
            <div className="box-container">
                <ListadoSeries
                    titulo="Series Mejor Puntuadas"
                    peliculas={seriesTopRated}
                />
            </div>
        </div>

    )
}
export default SeriesHome;