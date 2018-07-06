import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ characters, favorites }) => {

  const makeCards = characters.map(character => {
    return <Card
      character={character}
      favorites={favorites}
    />;

  });

  return (
    <div className="card-container">
      {makeCards}
    </div>
  );
};

export default CardContainer;