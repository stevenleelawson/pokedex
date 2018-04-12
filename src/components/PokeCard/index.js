import React from 'react';

const PokeCard = ({name, pic}) => {
  return (
    <div>
      <p>{name}</p>
      <img src={pic} />
    </div>
  )
}

export default PokeCard;
