import "../styles/_Paginado.scss"

const Paginado = ({ handleClickPrimerPagina, handleClickPrev, handleClickNext,
    handleClickUltimaPagina, totalPages,page }) => {

    return (
        <div>
            <button onClick={handleClickPrimerPagina} disabled={page === 1}>Pagina 1</button>
            <button onClick={handleClickPrev} disabled={page === 1}>Prev</button>
            <p className="text-paginado">Página {page}</p>
            <button onClick={handleClickNext} disabled={totalPages > 500 ? page === 500 : page == totalPages}>Next</button>
            <button onClick={ () => handleClickUltimaPagina (totalPages > 500 ? 500 : totalPages)}
            disabled={totalPages > 500 ? page === 500 : page == totalPages}>Ultima Pagina</button>

        </div>
    )
}

export default Paginado;