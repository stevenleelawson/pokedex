import React from 'react';
import './styles.css';

const Card = ({name, id}) => {
  return (
    <div className='card'>
      <h1>{name}</h1>
    </div>
  )
}

export default Card
