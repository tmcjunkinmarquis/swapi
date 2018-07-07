import React from 'react';
import './Card.css';

const Card = (props) => {

  const { cardType } = props;
  

  const renderPeople = () => {
    const { name } = props.card;
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

  const renderPlanets = () =>{
    return <div>I am a planet</div>
  }

  

  return (
   <div>
     {cardType === 'people' && renderPeople()}
     {cardType === 'planets' && renderPlanets()}
   </div>
    
  );
};

export default Card;