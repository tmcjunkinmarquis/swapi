import React, { Component } from 'react';
import Form from '../Form/Form';
import { ButtonContainer } from '../../StatelessComponents/ButtonContainer/ButtonContainer'
import { ScrollContainer } from '../../StatelessComponents/ScrollConatiner/ScrollContainer'
import { firstFetch } from '../../ApiCall/ApiCall'

// import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      scroll: []
    }
  }

  async componentDidMount () {
    

    const firstResponse = await firstFetch();
    const scrollValue = firstResponse.results 
    this.setState({scroll: scrollValue});
    debugger
  }

  render() {
    return (
      <div className="App">

        <ScrollContainer />
        <h1 className="App-title">Star Wars</h1>
        <div>
          <input
            type="button"
            value='View Favorites'
          />fave#
        </div>
        <Form />
        <ButtonContainer />


      </div>
    );
  }
}

export default App;
