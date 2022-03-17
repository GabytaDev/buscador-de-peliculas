// import { useState, useEffect } from "react";
//https://api.themoviedb.org/3/movie/550?api_key=90d7b1e3c47854073e093a7f557291b5

import "../styles/_Home.scss";
import "../styles/_mixins.scss";
import MoviesHome from "./MoviesHome";
import SeriesHome from "./SeriesHome";
import Carousel from "./Carousel";

const Home = () => {

    return (
        <div>
            <section className="container-carousel">
                <Carousel/>
            </section>

            <div className="container-general">
                <section >
                    <MoviesHome/>
                </section>
                
            </div>
            <div className="container-general">
                <section>
                    <SeriesHome/>        
                </section> 
            </div>
        </div>
    )
}

export default Home;