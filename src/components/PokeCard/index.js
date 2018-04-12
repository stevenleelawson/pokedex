import React from 'react';

const PokeCard = ({name, pic, weight, type}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Weight: {weight}</p>
      <p>Type: {type}</p>
      <img src={pic} />

    </div>
  )
}

export default PokeCard;
