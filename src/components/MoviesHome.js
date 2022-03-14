import ListadoMovies from "./ListadoMovies";
import "../styles/_ListadoMovies.scss";
import "../styles/_MoviesHome.scss"

const MoviesHome = () => {

    return (
        <div  className="container-general">
            <div className="box-container">
                <ListadoMovies
                    titulo="Peliculas Populares"
                    url="popular"
                />
            </div>
            <div className="box-container">
                <ListadoMovies
                    titulo="Próximos lanzamientos"
                    url="upcoming" 
                />
            </div>
        </div>

    )
}
export default MoviesHome;