import { useState, useEffect } from "react";
import {urlBase, apiKey, search} from "../utils/Variables" ;
import { useParams } from "react-router-dom"  

const ResultadoBusqueda = ()=>{
  const [resultados, setResultados] = useState ([]);
  const params = useParams()

  useEffect(() => {
    
        fetch (`${urlBase}${search}/movie?${apiKey}&query=${params.resultado}&language=es-ES`)
        .then(res => res.json())
        .then(data => {
            setResultados(data.results)
        })
    
    
}, [params])

console.log(resultados)

    return (
        <div>
           {resultados.map(resultado =>(
             <div key={resultado.id}>
               <p>{resultado.title}</p>
             </div>
           ))}
    </div>

    )
}
export default ResultadoBusqueda;