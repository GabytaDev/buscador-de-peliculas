import ListadoSeries from "./ListadoSeries";
import "../styles/_ListadoMovies.scss";
import "../styles/_MoviesHome.scss";



const SeriesHome = () => {
    return (
        <div className="container-general">
            <div className="box-container">
                <ListadoSeries
                    titulo="Series Populares"
                    url="popular"
                />
            </div>
            <div className="box-container">
                <ListadoSeries
                    titulo="Series Mejor Puntuadas"
                    url="top_rated"
                />
            </div>
        </div>

    )
}
export default SeriesHome;