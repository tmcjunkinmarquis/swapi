import React from 'react';
import './Card.css';

const Card = (props)=>{


  return(
    <div className="card">
      <p>{props.name}</p>
      <p>{props.homeworld.name}</p>
      <p>{props.homeworld.population}</p>
      <p>{props.species.name}</p>
      <p>{props.species.language}</p>
    </div>
  );
};

export default Card;