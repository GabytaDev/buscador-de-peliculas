import { useState, useEffect } from 'react';
import {urlBase, apiKey, parametrosFetch,queryLenguaje,queryPagina} from "../utils/Variables";

const useFetchMovies = (categoria,tipo,page)=>{
    const [peliculas, setPeliculas] = useState([])
    const [totalPages, setTotalPages] = useState (1)
    const url = `${urlBase}${parametrosFetch(categoria,tipo)}?${apiKey}${queryLenguaje}${queryPagina}1`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPeliculas(data.results))
      
    }, [page])
    
    return ({peliculas: peliculas,
             totalPages:totalPages           
             })

}
export default useFetchMovies;