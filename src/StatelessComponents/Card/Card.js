import React from 'react';
import './Card.css';

const Card = (props) => {

  const { cardType } = props;
  const { name } = props.card;
  console.log(name);


  const renderPeople = () => {
    return <div className="card">
      <input
        type="button"
        value="faveOrNot ?"
        className="btn active"
      />
      <p>{name}</p>
      <p>{props.card.homeworld.name}</p>
      <p>{props.card.homeworld.population}</p>
      <p>{props.card.species.name}</p>
      <p>{props.card.species.language}</p>
    </div>;
  };

  

  return (
   <div>
     {cardType === 'people' && renderPeople()}
   </div>
    
  );
};

export default Card;