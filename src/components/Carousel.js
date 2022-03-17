import "../styles/_Carousel.scss";
import { useState, useEffect } from "react";
import React from "react";
import Slider from "react-slick";

const Carousel = () => {
    const [imagenes, setImagenes] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=90d7b1e3c47854073e093a7f557291b5&language=es-ES&page=1`)
            .then(res => res.json())
            .then(data => setImagenes(data.results))
        console.log("data carousel", imagenes)
    }, [])
    
    return (
        <div className="container-carousel">
            <Slider
                dots={true}
                autoplay={false}
                
            >
          
             {imagenes.map(imagen => (
                 <div key={imagen.id} className="container-imagen">
                     <h3>{imagen.tittle}</h3>
                     <img src={`https://image.tmdb.org/t/p/original/${imagen.poster_path}`}
                      alt={imagen.tittle} className="imagen-slider"></img>
                 </div>
             ))}   
               
            </Slider>
        </div>
    );
}


export default Carousel;