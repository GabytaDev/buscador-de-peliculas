import { useState, useEffect } from "react";
//https://api.themoviedb.org/3/movie/550?api_key=90d7b1e3c47854073e093a7f557291b5
import { Link } from "react-router-dom";



const Home = ()=>{

    const [peliculasPopulares, setPeliculasPopulares]= useState ([])
    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=90d7b1e3c47854073e093a7f557291b5&language=es`)
      .then(res => res.json())
      .then(data => setPeliculasPopulares(data.results))
    },[])

    return (
        <div>
           <h2>Peliculas Populares</h2>
            <div className="Card-movie">
                {peliculasPopulares.map(pelicula => (

                   <Link to={`/movie/${pelicula.id}`} key={pelicula.id}>
                     <h2>{pelicula.original_title}</h2>
                     <img src={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}></img>
                   </Link> 
                ))}
            </div>
        </div>
    )
}

export default Home;