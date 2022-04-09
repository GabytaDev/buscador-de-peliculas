import useFetchMovies from "../hooks/useFetchMovies";
import usePaginado from "../hooks/usePaginado";
import CardTv from "./CardTv";
import Paginado from "./Paginado";
import "../styles/_Card.scss";

const TvRanking = () => {
    const { page, handleClickPrimerPagina, handleClickPrev, handleClickNext, handleClickUltimaPagina } = usePaginado()
    const { peliculas: seriesTopRated, totalPages } = useFetchMovies("tv", "top_rated", page);

    return (
        <div>
            <div className='container-titulo-link'>
                <h2 className="titulo-cards">Series con mejores criticas</h2>
            </div>
            <CardTv
                peliculas={seriesTopRated}
            />
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

export default TvRanking;