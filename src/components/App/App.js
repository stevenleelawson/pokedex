import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import loadingGif from './loading-gif.gif';
import * as api from '../../apiCalls';
import PokeContainer from '../../containers/PokeContainer/PokeContainer';

export class App extends Component {
  async componentDidMount () {
    const pokeTypes =  await api.getTypes()
    this.props.loadPokemonTypes(pokeTypes)
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        {this.props.types.length === 0 &&
          <img src={loadingGif} />
        }
        <PokeContainer />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  types: state.types
})

export const mapDispatchToProps = (dispatch) => ({
  loadPokemonTypes: (pokemonType) => dispatch(actions.loadPokemonTypes(pokemonType))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
