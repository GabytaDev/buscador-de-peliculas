// import { useState, useEffect } from "react";
//https://api.themoviedb.org/3/movie/550?api_key=90d7b1e3c47854073e093a7f557291b5
import "../styles/_MoviesHome.scss";
import "../styles/_Home.scss";
import "../styles/_mixins.scss"
import MoviesHome from "./MoviesHome";
import SeriesHome from "./SeriesHome"

const Home = () => {

    return (
        <div>
            <section className="container-carrousel">
                <h2>Carrousel</h2>
            </section>
            <div className="container-general">
                <section className="container-card">
                    <MoviesHome
                        titulo="Peliculas Populares"
                        url="popular" />
                </section>
                <section className="container-card">
                    <MoviesHome
                        titulo="Peliculas Mejor Puntuadas"
                        url="top_rated" />
                </section>
            </div>
            <div className="container-general">
                <section className="container-card">
                    <SeriesHome
                        titulo="Series Populares"
                        url="popular" />
                </section>
                <section className="container-card">
                    <SeriesHome
                        titulo="Series Mejor Puntuadas"
                        url="top_rated" />
                </section>
            </div>
        </div>
    )
}

export default Home;