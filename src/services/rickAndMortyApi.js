const BASE_URL = 'https://rickandmortyapi.com/api/';
const CHARACTER_URL = 'character/';

const get = url => fetch(url)
  .then(response => response.json())
  .then(checkResponseData)
  
export function checkResponseData(response) {
  if(response.Response === 'False') throw response.Error;
  return response;
}

export function searchCharacter({ search }, { page = 1 }) {
  const query = `?name=${search}`;
  const paging = `page=${page}`;

  return  get(`${BASE_URL}${CHARACTER_URL}${query}&${paging}`);
}
export function getCharacter(id) {
  const url = `${BASE_URL}${CHARACTER_URL}${id}`;
  return get(url);
}