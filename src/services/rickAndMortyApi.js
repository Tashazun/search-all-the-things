const BASE_URL = 'https://rickandmortyapi.com/api';
const CHARACTER_URL = '/character/';

const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function search({ name }, { page = 1 }) {
const search = `?name=${name}`;
// const paging = `&page=${page}&pageSize=${pageSize}`;
console.log(get(`${BASE_URL}${CHARACTER_URL}${search}`));
return get(`${BASE_URL}${CHARACTER_URL}${search}`);
}