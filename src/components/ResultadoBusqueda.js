import usePaginado from '../hooks/usePaginado';
import { useState, useEffect } from "react";
import { urlBase, apiKey, search, queryLenguaje, queryPagina } from "../utils/Variables";
import { useParams } from "react-router-dom"
import Card from "./Card";
import Paginado from './Paginado';
import "../styles/_ResultadoBusqueda.scss"

const ResultadoBusqueda = () => {
  const [resultados, setResultados] = useState([]);
  const params = useParams()
  const { page, handleClickPrimerPagina, handleClickPrev, handleClickNext, handleClickUltimaPagina } = usePaginado()
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`${urlBase}${search}/multi?${apiKey}${queryLenguaje}${queryPagina}${page}&query=${params.resultado}`)
      .then(res => res.json())
      .then(data => {
        setResultados(data.results)
        setTotalPages(data.total_pages);
      })


  }, [params, page])

  return (
    <div className="container">
      <h2 className="titulo">Resultado de la Busqueda</h2>
      <div className="container-cards">
        {resultados.map(resultado => (
          <Card
            key={resultado.id}
            resultado={resultado}
            mediaType={resultado.media_type} />
        ))}
      </div>
      <Paginado
        handleClickPrimerPagina={handleClickPrimerPagina}
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
        handleClickUltimaPagina={handleClickUltimaPagina}
        page={page}
        totalPages={totalPages}
      />
    </div>

  )
}
export default ResultadoBusqueda;