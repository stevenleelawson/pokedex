import React from 'react';
import './styles.css';

const Card = ({name, id, pokeArray, handleClick}) => {
  console.log('card',pokeArray)
  const getID = () => {
    const pokeIds = pokeArray.map( poke => poke.id);
    console.log('crap',pokeIds)
  }
  return (
    <div id={id} className='card' onClick={handleClick}>
      <h1>{name}</h1>

    </div>
  )
}

export default Card
