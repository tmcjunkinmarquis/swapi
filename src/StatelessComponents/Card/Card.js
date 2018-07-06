import React from 'react';
import './Card.css';

const Card = (props)=>{
  const { name, homeworldSearch } = props;

  return(
    <div className="card">
      <p>{name}</p>
      <p>{()=>homeworldSearch}</p>
      
    </div>
  );
};

export default Card;