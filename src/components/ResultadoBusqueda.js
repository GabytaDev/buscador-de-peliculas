import { useState, useEffect } from "react";
import { urlBase, apiKey, search, queryLenguaje,queryPagina } from "../utils/Variables";
import { Link, useParams } from "react-router-dom"
import "../styles/_ResultadoBusqueda.scss"

const ResultadoBusqueda = () => {
  const [resultados, setResultados] = useState([]);
  const params = useParams()

  useEffect(() => {
    fetch(`${urlBase}${search}/multi?${apiKey}${queryLenguaje}${queryPagina}1&query=${params.resultado}`)
      .then(res => res.json())
      .then(data => {
        setResultados(data.results)
      })


  }, [params])

  return (
    <div className="container">
      <h2 className="titulo">Resultado de la Busqueda</h2>
      <div className="container-cards">
        {resultados.map(resultado => (
          //agregar card que reciba media_type
          <Link to={`/movie/${resultado.id}`} key={resultado.id} className="card">
            
              <p className="text-detalle">{resultado.title}</p>
              <div className="content-img">
                <img src={`https://image.tmdb.org/t/p/w200/${resultado.poster_path}`}
                alt="poster de pelicula"></img>
              </div>
            
            
            </Link>
        ))}
      </div>
    </div>

  )
}
export default ResultadoBusqueda;