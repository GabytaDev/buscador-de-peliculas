import { useState, useEffect } from 'react';
import {urlBase, apiKey, parametrosFetch,queryLenguaje,queryPagina} from "../utils/Variables";

const useFetchMovies = (categoria,tipo)=>{
    const [peliculas, setPeliculas] = useState([])

    const url = `${urlBase}${parametrosFetch(categoria,tipo)}?${apiKey}${queryLenguaje}${queryPagina}1`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPeliculas(data.results))
    //    agregar page al array de dependencias,a los parametros y a la url   
    }, [])
    return ({peliculas: peliculas})

}
export default useFetchMovies;