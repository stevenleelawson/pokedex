import React from 'react';
import './styles.css';

const Card = ({nameType, id, pokeArray, handleClick, pokemon}) => {
  // const poke = pokemon.map(poke => )
  return (
    <div id={id} className='card' onClick={handleClick}>
      <h1>{nameType}</h1>
    </div>
  )
}

export default Card
