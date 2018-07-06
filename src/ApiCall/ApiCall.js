export const firstFetch = () => {
  return fetch("https://swapi.co/api/films/")
    .then(response => response.json())
    .catch(error => error.message);

};

export const fecthForPeople = async (characterPaths) => {
  let answer = [];
  await Promise.all(characterPaths.map(async path =>{
    const response = await fetch(path);
    const pathy = await response.json();
    
    
    answer.push(pathy);
    
  }))
  return answer
}