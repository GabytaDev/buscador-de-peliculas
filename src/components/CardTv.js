import { Link } from "react-router-dom";
import portadaNotfound from "../images/portadaNotfound.jpeg";
import "../styles/_Card.scss"

const CardTv = ({ peliculas }) => {

    return (
        <div className="container-cards">

            {peliculas.map(serie => (
                <Link to={`/tv/${serie.id}`} className="card" key={serie.id}>
                    <div className="unit-card">
                        <p className="text-detalle">{serie.name}</p>
                        <div>
                            {serie.poster_path ?
                                <img src={`https://image.tmdb.org/t/p/w200/${serie.poster_path}`}
                                    alt={serie.name}>
                                </img>
                                : <img src={portadaNotfound} className="content-img"></img>}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default CardTv;