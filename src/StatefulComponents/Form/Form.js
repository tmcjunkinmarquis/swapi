import React, { Component } from 'react';


class Form extends Component{
  constructor(){
    super()
    this.state = {
      value: ''
    }
  }

  handleChange = (event)=>{
    event.preventDefault()
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    console.log('happy')
  }
  render(){
    return(
      <form
        onSubmit = {this.handleSubmit}
      >Search Form
        <input
          type="text"
          value={this.state.value}
          onChange = {this.handleChange}
          placeholder = 'Enter some shit'
          />
      </form>
    )
  }
}

export default Form;