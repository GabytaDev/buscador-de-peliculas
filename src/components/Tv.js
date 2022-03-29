import useFetchMovies from "../hooks/useFetchMovies";
import CardTv from "./CardTv";
import { cortarArray } from "../utils/Variables";
import { TiArrowRightOutline as FlechaVerMas } from "react-icons/ti";
import { Link } from "react-router-dom";
import "../styles/_Card.scss";

const Tv = () => {
    const { peliculas: seriesPopulares } = useFetchMovies("tv", "popular");
    const { peliculas: seriesTopRated } = useFetchMovies("tv", "top_rated");
    const { peliculas: seriesOnTheAir } = useFetchMovies("tv", "on_the_air");

    return (
        <div>
            <div className="container-titulo-link">
                <h2 className="titulo-cards">Series Populares</h2>
                <Link to={`popular`}>
                    <FlechaVerMas className="flecha-ver-mas"/>
                </Link>
            </div>
            <CardTv
                peliculas ={cortarArray(seriesPopulares)}
            />
            <div className="container-titulo-link">
                <h2 className="titulo-cards">Series con mejores criticas </h2>
                <Link to={`toprated`}>
                    <FlechaVerMas className="flecha-ver-mas" />
                </Link>
            </div>
            <CardTv
                peliculas ={cortarArray(seriesTopRated)}
            />
            <div className="container-titulo-link">
                <h2 className="titulo-cards">Series al aire </h2>
                <Link to={`ontheair`}>
                    <FlechaVerMas className="flecha-ver-mas" />
                </Link>
            </div>
            <CardTv
                peliculas ={cortarArray(seriesOnTheAir)}
            />

        </div>
    )
}
export default Tv;