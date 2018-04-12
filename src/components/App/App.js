import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/'

class App extends Component {
  async componentDidMount () {
    const response = await fetch('http://localhost:3001/types');
    const data = await response.json();
    console.log(data)
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <FakeContainer />
      </div>
    );
  }
}


export default App;
