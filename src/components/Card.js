import { Link } from "react-router-dom";
import portadaNotfound from "../images/portadaNotfound.jpeg"

const Card = ({resultado, mediaType,})=>{
 return (
        <Link to={`/buscar/multi/${mediaType}`} className="card">
             <p className="text-detalle">
                {resultado.title ? resultado.title : resultado.name}
            </p>
            <div className="content-img">
            {resultado.poster_path?
              <img src={`https://image.tmdb.org/t/p/w200/${resultado.poster_path}`}
              alt="poster de pelicula"></img>
              : <img src={portadaNotfound}></img>} 
            </div>
         </Link>
        
    )}

export default Card;