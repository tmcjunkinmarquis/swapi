import React from 'react';
import './Card.css';

const Card = (props)=>{
  const { name, homeowrld, species} = props;

  return(
    <div className="card">
      <p>{name}</p>
      <p>{homeowrld}</p>
      <p>{species}</p>
      
    </div>
  );
};

export default Card;