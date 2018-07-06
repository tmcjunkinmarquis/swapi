import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = (props) =>{
  const { cards, homeWorldSearch } = props;
  
  

  const makeCards = () => {
    return cards.map(card =>{
      return (
        <Card
          name={card.name}
          homeworldSearch={homeWorldSearch(card.homeworld)}/>
      )
    });
  };
  
  return (
    <div className="card-container">
      {makeCards()}
    </div>
  );
};

export default CardContainer;