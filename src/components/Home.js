import "../styles/_Home.scss";
import "../styles/_mixins.scss";
import MoviesHome from "./MoviesHome";
import SeriesHome from "./SeriesHome";
import Carousel from "./Carousel";

const Home = () => {

    return (
        <div>
            <section>
                <Carousel />
            </section>

            <div className="container-general">
                <section>
                    <MoviesHome />
                </section>
            </div>
            <div className="container-general">
                <section>
                    <SeriesHome />
                </section>
            </div>
        </div>
    )
}

export default Home;