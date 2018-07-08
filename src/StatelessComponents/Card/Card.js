import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { name } = props.card;
  const { cardType } = props;

  const renderPeople = () => {
    return <div className="card">
      <input
        type="button"
        value="faveOrNot ?"
        className="btn active"
      />
      <p>{name}</p>  
      <p>{props.card.homeworld.population}</p>
      <p>{props.card.species.name}</p>
      <p>{props.card.species.language}</p>
      <p>{props.card.homeworld.name}</p>
    </div>;
  };

  const renderPlanets = () => {
    const renderResidents = (residents) => {
      return residents.map((resident, index) => {
        return <p
          key={index}>
          {resident.name}
        </p>;    
      });
    };
    return <div className="card">
      <input
        type="button"
        value="faveOrNot ?"
        className="btn active"
      />
      <p>{name}</p>
      <p>{props.card.terrain}</p>
      <p>{props.card.population}</p>
      <p>{props.card.climate}</p>
      {renderResidents(props.card.residents)}    
    </div>;
  };

  const renderVehicles = ()=>{
    return <div className="card">
      <input
        type="button"
        value="faveOrNot ?"
        className="btn active"
      />
      <p>{name}</p>
      <p>{props.card.model}</p>
      <p>{props.card.passengers}</p>
      <p>{props.card.vehicle_class}</p>
    </div>;
  };

  return (
    <div>
      {cardType === 'people' && renderPeople()}
      {cardType === 'planets' && renderPlanets()}
      {cardType === 'vehicles' && renderVehicles()}
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  cardType: PropTypes.string.isRequired 
};

export default Card;