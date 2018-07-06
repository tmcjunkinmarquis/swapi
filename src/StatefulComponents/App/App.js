import React, { Component } from 'react';
import { ButtonContainer } from '../../StatelessComponents/ButtonContainer/ButtonContainer';
import { ScrollContainer } from '../../StatelessComponents/ScrollConatiner/ScrollContainer';
import { firstFetch, fetchForPeople, fetchForHomeworld } from '../../ApiCall/ApiCall';
import {searchForPeople, searchForPlanets, searchForVehicles} from './ButtonSearhingHelper'
import CardContainer from '../../StatelessComponents/CardContainer/CardContainer'


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      randomMovieObject: {},
      cards: []
      
    };
  }

  peopleSearch = async ()=>{
    const characterPaths = searchForPeople(this.state)
    const characters = await fetchForPeople(characterPaths);
    // const homeWorld = await fetchForHomeworld(characters)
    this.setState({cards: characters})
  }

  homeWorldSearch = async (path)=>{
    // console.log('happy home world search');
    const home = await fetchForHomeworld(path)
    // console.log(home.name);
    const homeWorld = home.name
  }

  planetSearch = () => {
    searchForPlanets(this.state.movies)
  }

  vehicleSearch = () => {
    searchForVehicles(this.state.movies)
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
            cards={this.state.cards}
            homeWorldSearch={this.homeWorldSearch}/>
            homeWorld={}


      </div>
    );
  }
}

export default App;
