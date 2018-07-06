import React from 'react';
import './Card.css';

const Card = (props)=>{
  
  return(
    <div className="card">
      <input type="button"
      value = "faveOrNot ?"
      />
      <p>{props.character.name}</p>
      <p>{props.character.homeworld.name}</p>
      <p>{props.character.homeworld.population}</p>
      <p>{props.character.species.name}</p>
      <p>{props.character.species.language}</p>
    </div>
  );
};

export default Card;