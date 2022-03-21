import "../styles/_Carousel.scss";
import "../styles/_Busqueda.scss"; 
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Slider from "react-slick";

const Carousel = () => {
    const [imagenes, setImagenes] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=90d7b1e3c47854073e093a7f557291b5&language=es-ES&page=1`)
            .then(res => res.json())
            .then(data => setImagenes(data.results))
    }, [])

    return (
        <div className="container-carousel">
            <Slider
                dots={true}
                autoplay={false}
                
            >


                {imagenes.map(imagen => (
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