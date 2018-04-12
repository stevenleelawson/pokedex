import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/'
import { connect } from 'react-redux';
import * as actions from '../../actions'

export class App extends Component {
  async componentDidMount () {
    const response = await fetch('http://localhost:3001/types');
    const data = await response.json();
    console.log('pokes',data)
    this.props.loadPokemonTypes(data)
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

export const mapDispatchToProps = (dispatch) => ({
  loadPokemonTypes: (pokemonType) => dispatch(actions.loadPokemonTypes(pokemonType))
})
export default connect(null, mapDispatchToProps)(App);
