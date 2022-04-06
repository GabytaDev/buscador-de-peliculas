import "../styles/_TvDetalle.scss";
import imgNotFound from "../images/imgNotFound.webp"
import portadaNotfound from "../images/portadaNotfound.jpeg"
import { urlBase, apiKey } from "../utils/Variables"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TvDetalle = () => {
    const params = useParams()
    const [series, setSeries] = useState([])

    useEffect(() => {
        fetch(`${urlBase}tv/${params.idtv}?${apiKey}&language=es-ES`)
            .then(res => res.json())
            .then(data => setSeries(data))
        console.log(series)
    }, [])


    return (
        <div>
            <div className="container-background-tv">
                {series.backdrop_path ? 
                <img src={`https://image.tmdb.org/t/p/original${series.backdrop_path}`} className="img-fondo-tv" alt="imagen de fondo serie"/>
                :<img src={imgNotFound} className="img-not-found" alt="sin imagen"></img>}

                <section className="container-tv">
                    <div className="content-img-tv">
                    {series.poster_path?
                        <img src={`https://image.tmdb.org/t/p/w300${series.poster_path}`} alt={series.name}></img>
                        :<img src={portadaNotfound} className="not-img-portada" alt="sin imagen"></img>}
                    </div>
                    <article className="content-info-tv">
                        <h2 className="name-tv">{series.name}</h2>
                        <h4 className="subtitle-tv">General:</h4>
                        <p className="text-tv">{series.overview}</p>
                        <h4 className="subtitle-tv">Puntuación promedio</h4>
                        <p>{series.vote_average}</p>

                        <div className="text-tv">
                            <h4 className="subtitle-tv">Géneros:</h4>
                            {series?.genres?.map(genero => (
                                <span className="text-tv" key={genero.id}>{genero.name}</span>
                            ))}
                        </div>

                        <div className="text-tv">
                            <h4 className="subtitle-tv">Temporadas:</h4>
                            <span className="text-tv"> {series.number_of_seasons}</span>
                        </div>
                        <div className="text-tv">
                            <h4 className="subtitle-tv">Episodios:</h4>
                            <span className="text-tv"> {series.number_of_episodes}</span>
                        </div>
                    </article>
                </section>
            </div>
        </div>
    )
}

export default TvDetalle;