import React from 'react';

const PokeCard = ({name, pic, weight, type}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{weight}</p>
      <p>{type}</p>
      <img src={pic} />

    </div>
  )
}

export default PokeCard;
