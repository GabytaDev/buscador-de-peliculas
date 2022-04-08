import { useState, useEffect } from 'react';
import { urlBase, apiKey, parametrosFetch, queryLenguaje, queryPagina } from "../utils/Variables";

const useFetchMovies = (categoria, tipo, page) => {

    const [isLoading, setIsLoading] = useState(false);
    const [peliculas, setPeliculas] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    

    const url = `${urlBase}${parametrosFetch(categoria, tipo)}?${apiKey}${queryLenguaje}${queryPagina}${page}`;
    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPeliculas(data.results);
                setTotalPages(data.total_pages);
                setIsLoading(false)
            })
    }, [page]);

    return ({
        isLoading: isLoading,
        peliculas: peliculas,
        totalPages: totalPages,
    })

}
export default useFetchMovies;