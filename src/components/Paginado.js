import "../styles/_Paginado.scss"
import "../styles/_Busqueda.scss"
import "../styles/_Boton.scss"

const Paginado = ({ handleClickPrimerPagina, handleClickPrev, handleClickNext,
    handleClickUltimaPagina, totalPages, page }) => {

    return (
        <div className="content-btn-page">
            <button onClick={handleClickPrimerPagina} disabled={page === 1} className="btn-style">Pagina 1</button>
            <button onClick={handleClickPrev} disabled={page === 1} className="btn-style">Previa</button>
            <p className="text-paginado">Página {page}</p>
            <button onClick={handleClickNext} disabled={totalPages > 500 ? page === 500 : page == totalPages}
                className="btn-style">Siguiente
            </button>
            <button onClick={() => handleClickUltimaPagina(totalPages > 500 ? 500 : totalPages)}
                disabled={totalPages > 500 ? page === 500 : page == totalPages} className="btn-style">Ultima Pagina
            </button>
        </div>
    )
}

export default Paginado;