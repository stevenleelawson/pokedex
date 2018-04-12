import React from 'react';
import './styles.css';

const PokeCard = ({name, pic, weight, type}) => {
  return (
    <div className='poke-card'>
      <h3>{name}</h3>
      <p>Weight: {weight}</p>
      <p>Type: {type}</p>
      <img src={pic} />

    </div>
  )
}

export default PokeCard;
