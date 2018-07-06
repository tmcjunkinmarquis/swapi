import React, { Component } from 'react';
import Form from '../Form/Form';
import { ButtonContainer } from '../../StatelessComponents/ButtonContainer/ButtonContainer';
import { ScrollContainer } from '../../StatelessComponents/ScrollConatiner/ScrollContainer';
import { firstFetch } from '../../ApiCall/ApiCall';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scroll: [],
      randomMovieObject: {}
    };
  }

  randomScrollForRefresh = async () => {
    const scroll = this.state.scroll;
    var randomMovieObject = scroll[Math.floor(Math.random() * scroll.length)];
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
    const scrollValue = firstResponse.results;
    await this.setState({ scroll: scrollValue });
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
        <Form />
        <ButtonContainer className="button-container" />


      </div>
    );
  }
}

export default App;
