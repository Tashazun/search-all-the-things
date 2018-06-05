const BASE_URL = 'https://rickandmortyapi.com/api/';
const CHARACTER_URL = 'character/';
const EPISODE_URL = 'episode/';

const get = url => fetch(url)
  .then(response => response.json())
  .then(checkResponseData)
  
export function checkResponseData(response) {
  if(response.Response === 'False') throw response.Error;
  return response;
}

// *Character Specific Search
export function searchCharacters({ search }, { page = 1 }) {
  const query = `?name=${search}`;
  const paging = `page=${page}`;

  return  get(`${BASE_URL}${CHARACTERS_URL}${query}&${paging}`);
}
export function getCharacter(id) {
  const url = `${BASE_URL}${CHARACTER_URL}${id}`;
  return get(url);
}

// *Episode Specific Search
export function searchEpisodes({ search }, { page = 1 }) {
  const query = `?episode=${search}`;
  const paging = `page=${page}`;

  return  get(`${BASE_URL}${EPISODE_URL}${query}&${paging}`);
}
export function getEpisode(id) {
  const url = `${BASE_URL}${EPISODE_URL}${id}`;
  return get(url);
}