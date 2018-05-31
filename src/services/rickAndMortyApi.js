const BASE_URL = 'https://rickandmortyapi.com/api/';
const EVERYTHING_URL = `${BASE_URL}/characters`;

const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function search({ name, sources = ['bad'] }, { page = 1, pageSize = 20 }) {
const search = `&q=${name}&sources=${sources.join()}`;
const paging = `&page=${page}&pageSize=${pageSize}`;

return get(`${EVERYTHING_URL}${search}${paging}`);
}