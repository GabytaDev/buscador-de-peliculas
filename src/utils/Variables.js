export const urlBase = "https://api.themoviedb.org/3/";
export const apiKey = "api_key=90d7b1e3c47854073e093a7f557291b5";
export const search = "search";
export const queryPagina = '&page=';
export const queryLenguaje = '&language=es-ES';

export const cortarArray = array => array.slice(0, 5);

export const parametrosFetch = (categoria,tipo) =>
`${categoria}/${tipo}`;

