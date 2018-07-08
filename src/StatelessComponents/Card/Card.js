import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { name, id } = props.card;
  const { cardType, isFavorite, toggleFavorite} = props;


  const renderPeople = () => {
    return <div className="card">
    <div>
        <input
          onClick={()=>toggleFavorite(id)}
          type="button"
          value="favorites"
          className="btn active"
        />
        {isFavorite}
    </div>
      
      
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
          key={`${resident.name}+${index}`}
        >
          {resident.name}
        </p>;    
      });
    };
    return <div className="card">
      <input
        onClick={() => toggleFavorite(id)}
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
        onClick={()=>toggleFavorite(id)}
        type="button"
        value="NotFave"
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
  cardType: PropTypes.string.isRequired,
  toggleFavorite: PropTypes.func.isRequired
};

export default Card;