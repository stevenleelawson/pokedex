import React from 'react';
import './styles.css';

const Card = ({name, id, pokeArray}) => {
  console.log('card',pokeArray)
  return (
    <div className='card'>
      <h1>{name}</h1>
    </div>
  )
}

export default Card
