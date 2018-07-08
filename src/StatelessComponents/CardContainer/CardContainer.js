import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = ({ cardType, cards, favorites }) => {

  const makeCards = cards.map((card, index) => {
    return <Card
      cardType={cardType}
      card={card}
      favorites={favorites}
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
  cardType: PropTypes.string,
  cards: PropTypes.array,
  favorites: PropTypes.array
};
CardContainer.defaultProps = { favorites: [] };

export default CardContainer;