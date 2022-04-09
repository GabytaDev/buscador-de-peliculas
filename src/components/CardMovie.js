import { Link } from "react-router-dom";
import portadaNotfound from "../images/portadaNotfound.jpeg";
import "../styles/_Card.scss"

const CardMovie = ({ peliculas }) => {
    return (
        <div className="container-cards">
            {peliculas.map(movie => (
                <Link to={`/movie/${movie.id}`} className="card" key={movie.id}>
                    <div className="unit-card">
                        <p className="text-detalle">
                            {movie.title ? movie.title : movie.name}
                        </p>
                        <div>
                            {movie.poster_path ?
                                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                                    alt={movie.title}>
                                </img>
                                : <img src={portadaNotfound} className="content-img"></img>}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
export default CardMovie;