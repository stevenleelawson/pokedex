import React from 'react';
import PokeCard from '../PokeCard';
import './styles.css';

const Card = ({nameType, id, pokeArray, handleClick, pokemon}) => {

  return (
    <div id={id} className='card' onClick={handleClick}>
      <h1>{nameType}</h1>
    </div>
  )
}

export default Card
