export const firstFetch = () => {
  return fetch("https://swapi.co/api/films/")
    .then(response => response.json())
    .catch(error => error.message);

};

export const fetchForPeople = async (characterPaths) => {
  let answer = [];
  await Promise.all(characterPaths.map(async path =>{
    const response = await fetch(path);
    const data = await response.json();
    answer.push(data);
  }));
  return answer;
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