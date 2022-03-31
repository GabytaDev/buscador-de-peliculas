import { useState, useEffect } from 'react';
import {urlBase, apiKey, parametrosFetch,queryLenguaje,queryPagina} from "../utils/Variables";

const useFetchMovies = (categoria,tipo,page)=>{
    const [peliculas, setPeliculas] = useState([])

    const url = `${urlBase}${parametrosFetch(categoria,tipo)}?${apiKey}${queryLenguaje}${queryPagina}${page}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPeliculas(data.results))
    //    agregar page al array de dependencias,a los parametros y a la url   
    }, [page])
    return ({peliculas: peliculas})

}
export default useFetchMovies;