import React, { Component } from 'react';
import { ButtonContainer } from
  '../../StatelessComponents/ButtonContainer/ButtonContainer';
import { ScrollContainer } from
  '../../StatelessComponents/ScrollConatiner/ScrollContainer';
import {
  firstFetch,
  fetchForPeople,
  fetchForHomeworld,
  fetchForSpecies,
  fetchForPlanets,
  getResidentsNames,
  fetchForVehicles
} from '../../ApiCall/ApiCall';
import CardContainer from
  '../../StatelessComponents/CardContainer/CardContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // isFavorite: false,
      cardType: '',
      movies: [],
      randomMovieObject: {},
      favorites: [],
      cards: [],
      characters: [],
      planets: [],
      vehicles: []
    };
  }

  toggleFavorite = (id)=>{
    const favorited = this.state.cards.filter((card)=>{
      return card.id === id;
    });
    this.setState({favorites: favorited}) 
  }

  pickAsearch = async (event) => {
    if (event.target.value === 'people' && this.state.cardType !== 'people' && this.state.characters.length === 0){
      this.peopleSearch();
    } else if (event.target.value === 'planets' && this.state.cardType !== 'planets' && this.state.planets.length === 0){ 
      this.planetSearch();
    } else if (event.target.value === 'vehicles' && this.state.cardType !== 'vehicles' && this.state.vehicles.length === 0){
      this.vehicleSearch();
    } else if (event.target.value === 'people'){
      this.setState({ cardType: 'people', cards: this.state.characters});
    } else if (event.target.value === 'planets'){
      this.setState({ cardType: 'planets', cards: this.state.planets});
    } else if (event.target.value === 'vehicles'){
      this.setState({ cardType: 'vehicles', cards: this.state.vehicles });
    } 
  }

peopleSearch = async () => {
  const charactersWithoutEverything = await fetchForPeople();
  const charactersWithHomeworld =
    await this.homeWorldSearch(charactersWithoutEverything);
  const characters =
    await this.speciesSearch(charactersWithHomeworld);
  this.setState({
    characters,
    cards: characters,
    cardType: 'people',
  });
}

speciesSearch = (characters) => {
  const unresolvedPromises = characters.map(async character => {
    const species = await fetchForSpecies(character.species[0]);
    return { ...character, species };
  });
  return Promise.all(unresolvedPromises);
}

//use this homeWorldSearch as pattern
homeWorldSearch = async (characters) => {
  const unresolvedPromises = characters.map(async (character, index) => {
    const homeworld = await fetchForHomeworld(character.homeworld);
    return { ...character, homeworld, id:`${character.name} + ${index}` };
  });
  return Promise.all(unresolvedPromises);
}

planetsCleaner = (planets) => {
  const cleanPlanets = planets.reduce((acc, planet, index) => {
    if (!planet.residents.length) {
      const newPlanet = Object.assign({}, planet, { residents: [{name:'no residents'}] });
      acc.push(newPlanet);
    } else {
      acc.push(planet);
    }
    return acc;
  }, []);
  return cleanPlanets;
}

planetSearch = async () => {
  const planetsWithoutEverything =
    await fetchForPlanets();
  const hydratedPlanets =
    await this.residentsSearch(planetsWithoutEverything);
  const cleanHydratedPlanets = this.planetsCleaner(hydratedPlanets);
  // const cleanHydPlanetsWithId = cleanHydratedPlanets.map((planet)=>{
  //   return {...planet, };
  // });
  this.setState({
    cardType: 'planets',
    planets: cleanHydratedPlanets,
    cards: cleanHydratedPlanets
  });
}

residentsSearch = async (planets) => {
  let hydratedPlanets;

  const promiseOfHydratedPlanets = planets.map(async (planet, index) => {
    const residentsOfPlanet = await getResidentsNames(planet);
    const residents = await Promise.all(residentsOfPlanet);
    return { ...planet, residents, id: `${planet.name} + ${index}` };
  });
  hydratedPlanets = await Promise.all(promiseOfHydratedPlanets);
  return hydratedPlanets;
}

vehicleSearch = async () => {
  const vehicles = await fetchForVehicles();
  const vehiclesWithId = await vehicles.map((vehicle, index)=>{
    return { ...vehicle, id: `${vehicle.name} + ${index}`};
  });
  
  await this.setState({ 
    cardType: 'vehicles', 
    vehicles: vehiclesWithId, 
    cards: vehiclesWithId});
}

randomScrollForRefresh = async () => {
  const movies = this.state.movies;
  var randomMovieObject = movies[Math.floor(Math.random() * movies.length)];
  await this.setState({
    randomMovieObject:
    {
      openingCrawl: randomMovieObject.opening_crawl,
      title: randomMovieObject.title,
      date: randomMovieObject.release_date
    }
  });
}

async componentDidMount() {
  const firstResponse = await firstFetch();
  const movies = firstResponse.results;
  await this.setState({ movies });
  this.randomScrollForRefresh();
}

render() {
  return (
    <div className="App">
      <ScrollContainer
        className="scroll"
        randomMovieObject={this.state.randomMovieObject} />
      <h1
        className="header">Star Wars</h1>
      <div>
        <input
          type="button"
          value='View Favorites'
          onClick={(event)=>this.pickAsearch(event)}
        />fave#
        </div>
      <ButtonContainer
        className="button-container"
        pickAsearch={this.pickAsearch}
      />
      <CardContainer
        toggleFavorite={this.toggleFavorite}
        cardType={this.state.cardType}
        cards={this.state.cards}
        favorites={this.state.favorites}
        isFavorite={this.state.isFavorite}
        pickAsearch={this.pickAsearch}
      />
    </div>
  );
}
}

export default App;
