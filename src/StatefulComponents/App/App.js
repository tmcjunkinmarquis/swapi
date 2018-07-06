import React, { Component } from 'react';
import { ButtonContainer } from '../../StatelessComponents/ButtonContainer/ButtonContainer';
import { ScrollContainer } from '../../StatelessComponents/ScrollConatiner/ScrollContainer';
import { firstFetch } from '../../ApiCall/ApiCall';
import {searchForPeople, searchForPlanets, searchForVehicles} from './ButtonSearhingHelper'


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      randomMovieObject: {}
    };
  }

  peopleSearch = ()=>{
    searchForPeople(this.state.movies)
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


      </div>
    );
  }
}

export default App;
