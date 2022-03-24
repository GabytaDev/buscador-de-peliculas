import { useState, useEffect } from "react";
import { urlBase, apiKey, search, queryLenguaje,queryPagina } from "../utils/Variables";
import { useParams } from "react-router-dom"
import Card from "./Card";
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
          <Card 
          key={resultado.id}
          resultado={resultado}
          mediaType={resultado.media_type}/>
        ))}
      </div>
    </div>

  )
}
export default ResultadoBusqueda;