import "../styles/_TvDetalle.scss";
import {urlBase, apiKey} from "../utils/Variables" 
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TvDetalle = ()=>{
    const params = useParams()
    const [series, setSeries] = useState([])
   
    useEffect(() => {
        fetch(`${urlBase}/tv/${params.idtv}?${apiKey}&language=es-ES`)
            .then(res => res.json())
            .then(data => setSeries(data))
            console.log(series)
    }, [])

  
    return (
        <div >
            <div className="container-imagen-tv">
            <img src={`https://image.tmdb.org/t/p/original${series.backdrop_path}`}></img>
            </div>
            <article>
            <p>{series.name}</p>
            <p>{series.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w300${series.poster_path}`}></img>
            </article>
            

        </div>
    )
}

export default TvDetalle;