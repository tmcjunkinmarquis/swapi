import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = (props) =>{
  const { characters } = props;
  
  

  const makeCards = () => {
    return characters.map(character =>{
      return (
        <Card
          name={character.name}
          homeworld={character.homeworld}
          species={character.species}
          />
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