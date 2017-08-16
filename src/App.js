import React, { Component } from 'react';
import Child from './Child';
import MyComponent from './MyComponent';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {name: 'Say my name'}
  }

  handleName(newName) {
    this.setState({ name: newName});
  }

  render() {
    return (
        //<MyComponent data="Welcome"/>     //Remove comment to see how my component works
        <Child name={this.state.name} onNameChange={this.handleName.bind(this)} />
    );
  }
}

export default App;
