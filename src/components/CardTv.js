import { Link } from "react-router-dom";

import "../styles/_Card.scss"

const CardTv = ({ peliculas}) => {

    return (
        <div className="container-series-card">

            {peliculas.map(serie => (
                <Link to={`/tv/${serie.id}`} className="card" key={serie.id}>
                    <div className="unit-card">
                        <p className="text-detalle">{serie.name}</p>
                        <div className="content-img">
                            <img src={`https://image.tmdb.org/t/p/w200/${serie.poster_path}`}

                                alt={serie.name}>
                            </img>
                        </div>
                    </div>
                </Link>
            ))}

        </div>

    )
}

export default CardTv;