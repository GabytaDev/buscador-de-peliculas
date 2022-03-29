import './App.scss';
import * as React from "react";
import * as ReactDOM from "react-dom";
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

const App = ()=>{
  return (
    <div>
      <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path="/busqueda" element={<Busqueda/>}/>
        <Route path="buscar/:resultado" element={<ResultadoBusqueda/>}/> 
        <Route path="/" element={<Home/>} />
        <Route path="/movie/:idPelicula" element={<MovieDetalle/>}/>
        <Route path="/buscar/multi/:mediatype" element={<Card/>}/>

        <Route path="/movie" element={<Movie/>}/>

        <Route path="/tv" element={<Tv/>}/>
        <Route path="/tv/:idtv" element={<TvDetalle/>}/>
        <Route path="/tv/popular" element={<TvPopular/>} />
        <Route path="/tv/toprated" element={<TvRanking/>} />
        <Route path="/tv/ontheair" element={<TvOnAir/>}/>
        {/* <Route path="*" element={<ErrorNoEncontrado />} /> */}
        
 {/* 
         {/*home --> peliculas tendencias  
        <Route path="movie/:trending/page/:numpage" element={<TrendingMovie/>}/> 
        {/*home --> peliculas tendencias--> click en pelicula  
        <Route path="/movie/:idPelicula/info" element={<infoMovie/>}/>
        <Route  path="/movie/:idPelicula/cast/" element={<RepartoMovie/>}/>
        <Route  path="/movie/:idPelicula/videos/" element={<VideoMovie/>}/>
        <Route  path="/movie/:idPelicula/similars/" element={<SimilarMovie/>}/>

        {/* navbar pelis --> peliculas populares 
        
        <Route path="/movie/:idPelicula/info" element={<infoMovie/>}/>
        <Route  path="/movie/:idPelicula/cast/" element={<RepartoMovie/>}/>
        <Route  path="/movie/:idPelicula/videos/" element={<VideoMovie/>}/>
        <Route  path="/movie/:idPelicula/videos/" element={<VideoMovie/>}/>

        {/* desde navbar ---> peliculas con mejores criticas 
        <Route path="/movie/:top_rated/page/:numpage" element={<RankingMovie/>}/>
        {/* desde navbar ---> peliculas a estrenar 
        <Route path="/movie/:upcoming/page/:numberpage" element={<UpcomingMovie/>}/>
        {/* desde navbar ---> peliculas en cine 
        <Route path="/movie/:now_playing/page/:numberpage" element={<NowMovie/>}/>
       
       
        {/*  desde navbar ---> tendencias 
        <Route path="/series/:trending/page/:numpage"/>
        
        
        <Route path="/lanzamientos" element={<Lanzamientos/>}/>
        <Route path="/:idPelicula/" element={<DetallePelicula/>}/>
        <Route path="/:idPelicula/:reparto" element={<Reparto/>}/>

        {/* tv 
        {/* home--> tv tendencias 
        <Route path="tv/:trending/page/:numpage" element={<tvTendencia/>}/>
       
        <Route path="/tv/:top_rated/page/:numpage" element={<RankingTv/>}/>
        
        
        <Route  path="/tv/:idPelicula/temporada/:numTemporada" element={<TemporadaTv/>}/>
        <Route  path="/tv/:idPelicula/cast/" element={<RepartoTv/>}/>
        <Route  path="/tv/:idPelicula/similar/" element={<SimilarTv/>}/>

        
        */}

      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
