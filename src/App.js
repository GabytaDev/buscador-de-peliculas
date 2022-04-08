import './App.scss';
import * as React from "react";
import { BrowserRouter,Routes, Route  } from "react-router-dom";
import NavBar from "./components/NavBar";
import Busqueda from "./components/Busqueda";
import ResultadoBusqueda from "./components/ResultadoBusqueda"
import Home from "./components/Home";
import MovieDetalle from "./components/MovieDetalle";
import Card from './components/Card';
import Tv from "./components/Tv";
import TvDetalle from './components/TvDetalle';
import TvPopular from './components/TvPopular';
import TvRanking from './components/TvRanking';
import TvOnAir from './components/TvOnAir';
import Movie from './components/Movie';
import MoviePopular from './components/MoviePopular';
import MovieTopRated from './components/MovieTopRated';
import MovieUpComing from './components/MovieUpComing';
import MovieNow from './components/MovieNow';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage'


const App = ()=>{
  return (
    <div>
      <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path="/busqueda" element={<Busqueda/>}/>
        <Route path="buscar/:resultado" element={<ResultadoBusqueda/>}/> 
        <Route path="/" element={<Home/>} />
        <Route path="movie/:idPelicula" element={<MovieDetalle/>}/>
        <Route path="/movie" element={<Movie/>}/>
        <Route path="movie/popular" element={<MoviePopular/>}/> 
        <Route path="/movie/top_rated" element={<MovieTopRated/>}/>
        <Route path="/movie/upcoming" element={<MovieUpComing/>}/>
        <Route path="/movie/now_playing" element={<MovieNow/>}/>
        <Route path="/tv" element={<Tv/>}/>
        <Route path="/tv/:idtv" element={<TvDetalle/>}/>
        <Route path="/tv/popular" element={<TvPopular/>} />
        <Route path="/tv/toprated" element={<TvRanking/>} />
        <Route path="/tv/ontheair" element={<TvOnAir/>}/>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App;
