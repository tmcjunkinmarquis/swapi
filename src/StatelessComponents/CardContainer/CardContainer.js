import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = ({ cardType, cards, toggleFavorite }) => {

  const makeCards = cards.map((card, index) => {
    return <Card
      toggleFavorite={toggleFavorite}
      cardType={cardType}
      card={card}
      key={cardType+index}
    />;
  });

  return (
    <div className="card-container">
      {makeCards}
    </div>
  );
};

CardContainer.propTypes = {
  cardType: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  favorites: PropTypes.array,
  toggleFavorite: PropTypes.func.isRequired
};
CardContainer.defaultProps = { favorites: [] };

export default CardContainer;