import React, { Component } from 'react';
import { ButtonContainer } from '../../StatelessComponents/ButtonContainer/ButtonContainer';
import { ScrollContainer } from '../../StatelessComponents/ScrollConatiner/ScrollContainer';
import { firstFetch, fetchForPeople, fetchForHomeworld, fetchForSpecies, fetchForPlanets, getResidentsNames, fetchForVehicles } from '../../ApiCall/ApiCall';
// import { searchForPeople, searchForPlanets, searchForVehicles } from './ButtonSearhingHelper';
import CardContainer from '../../StatelessComponents/CardContainer/CardContainer';


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
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

  pickedPeople = (buttonType) => {
    (this.state.cardType !== buttonType && this.state.characters.length)
    && this.setState({ cardType: buttonType });
    
    !this.state.characters.length && this.peopleSearch();
  }

  pickedPlanets = (buttonType) => {
    (this.state.cardType !== buttonType && this.state.planets.length) 
    && this.setState({cardType: buttonType});

    !this.state.planets.length && this.planetSearch();  
  }

  pickedVehicles = async (buttonType) => {
    (this.state.cardType !== buttonType && this.state.vehicles.length) 
    && await this.setState({ cardType: buttonType });

    !this.state.vehicles.length && this.vehicleSearch();  
  }

  pickAsearch = (event) => {
    if (event.target.value === 'people' && !this.state.cardType) {
      this.peopleSearch();
    } else {
      this.pickedPeople(event.target.value);
    }

    if (event.target.value === 'planets') {
      this.pickedPlanets(event.target.value);
    }
    if (event.target.value === 'vehicles') {
      this.pickedVehicles(event.target.value);
    }
  }


  peopleSearch = async () => { 
    const charactersWithoutEverything = await fetchForPeople();
    const charactersWithHomeworld = await this.homeWorldSearch(charactersWithoutEverything);
    const characters = await this.speciesSearch(charactersWithHomeworld);
    await this.setState({ characters, cards: characters, cardType: 'people' });  
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

  planetsClearner = (planets)=>{
    const cleanPlanets = planets.reduce((acc, planet)=>{
      if (!planet.residents.length) {
        Object.assign({}, planet, {residents: 'no residents'})
        acc.push(planet)
      } else {
        acc.push(planet)
      }
      return acc
    },[]);
    
    return cleanPlanets;
  }

  planetSearch = async () => {
    const planetsWithoutEverything = await fetchForPlanets();//array of 10 planets
    const hydratedPlanets = await this.residentsSearch(planetsWithoutEverything);
    const cleanHydratedPlanets = this.planetsClearner(hydratedPlanets);
    this.setState({ cardType: 'planets', planets: cleanHydratedPlanets, cards: cleanHydratedPlanets });
  }

  residentsSearch = async (planets) => {
    let hydratedPlanets;

    const promiseOfHydratedPlanets = planets.map(async planet => {
      const residentsOfPlanet = await getResidentsNames(planet);
      const residents = await Promise.all(residentsOfPlanet);
      return { ...planet, residents };
    });
    hydratedPlanets = await Promise.all(promiseOfHydratedPlanets);
   
    
    return hydratedPlanets;
  }

  vehicleSearch = async () => {
    const vehicles = await fetchForVehicles();
    await this.setState({ cardType: 'vehicles', vehicles, cards: vehicles}); 
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
          pickAsearch={this.pickAsearch}
        />

        <CardContainer
          cardType={this.state.cardType}
          cards={this.state.cards}
          favorites={this.state.favorites}
        />
      </div>
    );
  }
}

export default App;
