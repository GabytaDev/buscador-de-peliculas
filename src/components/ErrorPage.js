
import "../styles/_ErrorPage.scss";
import "../styles/_Boton.scss";
import page404 from "../images/page404.png";
import { Link } from "react-router-dom";
const ErrorPage = () => {

    return (
        <div className="content">
            <div className="content-text">
                <h3 className="title">Error 404: Página no encontrada</h3>
                <p className="text">La página que intentas buscar no se encuentra</p>
                <Link to="/">
                    <button className="btn-style">Volver al inicio</button>
                </Link>
            </div>
            <div className="content-img">
                <img src={page404} className="img-error" alt="pagina no encontrada"></img>
            </div>
        </div>
    )
}

export default ErrorPage;