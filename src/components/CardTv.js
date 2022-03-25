import { Link } from "react-router-dom";
import { IoIosArrowDroprightCircle as Flecha } from "react-icons/io";
import "../styles/_Card.scss";

const CardTv = ({ peliculas, titulo }) => {

    return (
        <div className="container-general">
            <h2 className="titulo">{titulo}<Flecha className="icono-flecha-detalle" /></h2>
            <div className="container-cards">
                <Link to={`/tv/${peliculas.id}`} className="card">
                    {peliculas.map(serie => (
                        <div key={serie.id} className="content-img">
                            <img src={`https://image.tmdb.org/t/p/w200/${serie.poster_path}`}
                                className="contenedor-imagen-listado"
                                alt={serie.name}>
                            </img>
                            <h3 className="text-detalle">{serie.name}</h3>
                        </div>
                    ))}
                </Link>
            </div>
        </div>

    )
}

export default CardTv;