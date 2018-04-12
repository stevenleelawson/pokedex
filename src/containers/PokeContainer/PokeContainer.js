import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import * as actions from '../../actions';
import * as api from '../../apiCalls';
import './styles.css'

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
    console.log('yyyup?',this.props.pokemon)
    const displayTypes = this.props.types.map( type => {
      return <Card
        nameType={type.name}
        id={type.id}
        key={type.id}
        pokeArray={type.pokemon}
        handleClick={this.handleClick}
        pokemon={this.props.pokemon}
      />
    })
    return (
      // <div>I be pokecon</div>
      <div className='card-container'>{displayTypes}</div>
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
