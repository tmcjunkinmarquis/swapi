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
  }))
  return answer
}

export const fetchForHomeworld = (path) => {
  // console.log('home world', path);
  let answer;
  answer = fetch(path)
  .then (response => response.json())
  .then (data => data)
  .catch(error => error.message)
  return answer
}