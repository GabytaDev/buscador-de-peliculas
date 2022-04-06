
import "../styles/_ErrorPage.scss"
import page404 from "../images/page404.png";

const ErrorPage = () => {

    return (
        <div className="content">
            <div className="content-text">
                <h3 className="title">Error 404: página no encontrada</h3>
                <p className="text">La página que intentas buscar no se encuentra</p>
                <button>Volver al inicio</button>
            </div>
            <div className="content-img">
                <img src={page404} className="img-error" alt="pagina no encontrada"></img>
            </div>
        </div>
    )
}

export default ErrorPage;