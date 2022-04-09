import { Link } from "react-router-dom";
import portadaNotfound from "../images/portadaNotfound.jpeg";
import "../styles/_Card.scss";

const Card = ({ resultado, mediaType }) => {
  return (
    <div>
      <Link to={`../${mediaType}/${resultado.id}`} className="card" key={resultado.id}>
        <div className="unit-card">
          <p className="text-detalle">
            {resultado.title ? resultado.title : resultado.name}
          </p>
          <div>
            {resultado.poster_path ?
              <img src={`https://image.tmdb.org/t/p/w200/${resultado.poster_path}`}
                alt={resultado.title}>
              </img>
              : <img src={portadaNotfound} className="content-img"alt={resultado.title} ></img>}
          </div>
        </div>
      </Link>
    </div>
  )
}
export default Card;