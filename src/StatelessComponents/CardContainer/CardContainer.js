import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ characters }) => {

  const makeCards = characters.map(character => {
    return <Card
      name={character.name}
      homeworld={character.homeworld}
      species={character.species}
    />;

  });

  return (
    <div className="card-container">
      {makeCards}
    </div>
  );
};

export default CardContainer;