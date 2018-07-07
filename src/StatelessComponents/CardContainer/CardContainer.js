import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ cardType, cards, favorites }) => {

  const makeCards = cards.map(card => {
    return <Card
      cardType={cardType}
      card={card}
      favorites={favorites}
      key={Math.random()}
    />;

  });

  return (
    <div className="card-container">
      {makeCards}
    </div>
  );
};

export default CardContainer;