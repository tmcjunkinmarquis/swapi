import React, { Component } from 'react';
import { ButtonContainer } from '../../StatelessComponents/ButtonContainer/ButtonContainer';
import { ScrollContainer } from '../../StatelessComponents/ScrollConatiner/ScrollContainer';
import { firstFetch, fetchForPeople, fetchForHomeworld, fetchForSpecies, fetchForPlanets, getResidentsNames } from '../../ApiCall/ApiCall';
// import { searchForPeople, searchForPlanets, searchForVehicles } from './ButtonSearhingHelper';
import CardContainer from '../../StatelessComponents/CardContainer/CardContainer';


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      randomMovieObject: {},
      favorites: [],
      cards: [],
      characters: [],
      planets: []

    };
  }

  peopleSearch = async () => {
    const charactersWithoutEverything = await fetchForPeople();
    const charactersWithHomeworld = await this.homeWorldSearch(charactersWithoutEverything);
    const characters = await this.speciesSearch(charactersWithHomeworld);
    this.setState({ characters });
  }

  speciesSearch = (characters) => {
    const unresolvedPromises = characters.map(async character => {
      const species = await fetchForSpecies(character.species[0]);
      return { ...character, species };
    });
    return Promise.all(unresolvedPromises);
  }

  //use this homeWorldSearch as pattern
  homeWorldSearch = (characters) => {
    const unresolvedPromises = characters.map(async character => {
      const homeworld = await fetchForHomeworld(character.homeworld);
      return { ...character, homeworld };
    });
    return Promise.all(unresolvedPromises);
  }

  planetSearch = async () => {
    const planetsWithoutEverything = await fetchForPlanets();//array of 10 planets
    const hydratedPlanets = await this.residentsSearch(planetsWithoutEverything);
    this.setState({planets: hydratedPlanets});  
  }

  residentsSearch = async (planets) => {
    let hydratedPlanets;
    
    const  promiseOfHydratedPlanets =  planets.map(async planet => {
      const residentsOfPlanet = await getResidentsNames(planet);
      const residents = await Promise.all(residentsOfPlanet);
      return { ...planet, residents }; 
    });
    hydratedPlanets = await Promise.all(promiseOfHydratedPlanets);
    return hydratedPlanets; 
  }

  vehicleSearch = () => {

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
          />fave#
        </div>

        <ButtonContainer
          className="button-container"
          peopleSearch={this.peopleSearch}
          planetSearch={this.planetSearch}
          vehicleSearch={this.vehicleSearch}
        />

        <CardContainer
          characters={this.state.characters}
          favorites={this.state.favorites}
        />



      </div>
    );
  }
}

export default App;
