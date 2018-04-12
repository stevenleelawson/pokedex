import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import PokeCard from '../../components/PokeCard';
import * as actions from '../../actions';
import * as api from '../../apiCalls';
import './styles.css';
import { Router } from 'react-router-dom';

export class PokeContainer extends Component {
  handleClick = async (event) => {
    console.log('event', event.target.id)
    const pokemonIds = this.props.types[event.target.id].pokemon
    const promises = pokemonIds.map( id => api.getPokeById(id))
    const data = await Promise.all(promises)
    console.log('data', data)
    this.props.loadPokemon(data);
  }

  render() {
    const displayTypes = this.props.types.map( type => {
      return <Card
        nameType={type.name}
        id={type.id}
        key={type.id}
        pokeArray={type.pokemon}
        handleClick={this.handleClick}
        pokemon={this.props.pokemon}
        // poke={displayPoke}
      />
    })
    const displayPoke = this.props.pokemon.map(poke => {
      return <PokeCard
              name={poke.name}
              pic={poke.sprites.front_default}
              weight={poke.weight}
              type={poke.type}
              key={poke.id}
            />
    })
    return (
      <div className='card-container'>
        <div>{displayTypes}</div>
        <div>{displayPoke}</div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  types: state.types,
  pokemon: state.pokemon
});

export const mapDispatchToProps = (dispatch) => ({
  loadPokemon: (pokemon) => dispatch(actions.loadPokemon(pokemon))
})


export default connect(mapStateToProps, mapDispatchToProps)(PokeContainer);
