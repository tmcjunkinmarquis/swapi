export const firstFetch = ()=>{
  return fetch("https://swapi.co/api/films/")
    .then(response => response.json())
    .catch(error => error.message);
  
};