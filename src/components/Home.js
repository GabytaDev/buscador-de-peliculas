// import { useState, useEffect } from "react";
//https://api.themoviedb.org/3/movie/550?api_key=90d7b1e3c47854073e093a7f557291b5
import "../styles/_ContainerCard.scss";
import PopularMovie from "./PopularMovie";


const Home = ()=> {

    return (
        <section className="container-card">
           <PopularMovie
           titulo="Peliculas Populares"/>
        </section>
    )
}

export default Home;