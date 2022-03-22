import useFetchMovies from "../hooks/useFetchMovies";
import ListadoMovies from "./ListadoMovies";
import "../styles/_ListadoMovies.scss";
import "../styles/_MoviesHome.scss"

const MoviesHome = () => {
    const {peliculas} = useFetchMovies("movie", "popular");
    const {peliculas: ultimasPeliculas} = useFetchMovies("movie", "upcoming");

    return (
        <div  className="container-general">
            <div className="box-container">
                <ListadoMovies
                    titulo="Peliculas Populares"
                    categoria = "movie"
                    tipo = "popular"
                    peliculas = {peliculas}
                />
            </div>
            <div className="box-container">
                <ListadoMovies
                    titulo="Próximos lanzamientos"
                    categoria = "movie"
                    tipo="upcoming"
                    peliculas={ultimasPeliculas}
                />  
            </div>
        </div>

    )
}
export default MoviesHome;