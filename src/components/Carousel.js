import useFetchMovies from "../hooks/useFetchMovies";
import "../styles/_Carousel.scss";
import "../styles/_Busqueda.scss"; 
import { Link } from "react-router-dom";
import React from "react";
import Slider from "react-slick";


const Carousel = () => {
    const {peliculas} = useFetchMovies("movie", "now_playing", );

    return (
        <div className="container-carousel">
           
            <Slider
                dots={true}
                autoplay={false} 
                arrows={false}   
            >
                {peliculas.map(imagen => (
                    <div key={imagen.id} className="container-imagen">
                        <img src={`https://image.tmdb.org/t/p/original/${imagen.backdrop_path}`}
                            alt="poster pelicula" className="imagen-slider">
                        </img>
                        <div className="container-info-pelicula">
                            <div className="info-pelicula">
                            <h3 className="title-movie">{imagen.title}</h3>
                            <p className="detalle-pelicula">{imagen.overview}</p>
                            <Link to={`/movie/${imagen.id}`} >
                                <button className="btn-style">Ver Mas</button> </Link>
                            
                            </div>
                        </div>
                    </div>

                ))}

            </Slider>
           
        </div>
    );
}


export default Carousel;