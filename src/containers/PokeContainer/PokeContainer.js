import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import './styles.css'

export class PokeContainer extends Component {
  render() {
    const displayTypes = this.props.types.map( type => {
      return <Card
        name={type.name}
        key={type.id}
        pokeArray={type.pokemon}
      />
    })
    return (
      // <div>I be pokecon</div>
      <div className='card-container'>{displayTypes}</div>
    )
  }
}

export const mapStateToProps = state => ({
  types: state.types
})

export default connect(mapStateToProps)(PokeContainer);
