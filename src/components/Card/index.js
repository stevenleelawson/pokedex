import React from 'react';
import PokeCard from '../PokeCard';
import './styles.css';

const Card = ({nameType, id, pokeArray, handleClick, pokemon}) => {
  const poke = pokemon.map(poke => {
    return <PokeCard
            name={poke.name}
            pic={poke.sprites.front_default}
          />
  })
  console.log('whynorender', poke)
  return (
    <div id={id} className='card' onClick={handleClick}>
      <h1>{nameType}</h1>

        <div>{poke}</div>

    </div>
  )
}

export default Card
