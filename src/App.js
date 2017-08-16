import React, { Component } from 'react';
import Stopwatch from './Stopwatch';
import Child from './Child';
import MyComponent from './MyComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {name: 'Say my name'}
  }

  handleName(newName) {
    this.setState({ name: newName});
  }

  render() {
    return (
        <MyComponent />
    );
  }
}

export default App;
