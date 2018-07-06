export const firstFetch = () => {
  return fetch("https://swapi.co/api/films/")
    .then(response => response.json())
    .catch(error => error.message);

};

export const fetchForPeople = async () => {
  const url = 'https://swapi.co/api/people/'
    const response = await fetch(url);
    const data = await response.json();
    
    
    return data.results
    
};

export const fetchForSpecies = async (path) => {
  const response = await fetch(path);
  return await response.json();
};

//use this fetchForHomeworld as pattern
export const fetchForHomeworld = async (path) => {
  const response = await fetch(path);
  return await response.json();
};