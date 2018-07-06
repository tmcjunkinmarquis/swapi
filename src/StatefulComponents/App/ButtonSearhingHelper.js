export const searchForPeople = (appState) => {
  const currentMovie = appState.randomMovieObject.title;
  
  return appState.movies.reduce((acc, movie)=>{
    if (movie.title === currentMovie) {
      
      acc = movie.characters
    }

    return acc
  }, []);
  
};

export const searchForVehicles = (movies) => {
  console.log('happy in vehicleSearch');
};

export const searchForPlanets = (movies) => {
  console.log('happy in planetSearch');
};