import React from 'react';
import PropTypes from 'prop-types';
import './ButtonContainer.css';

export const ButtonContainer = (props) => {
  const { pickAsearch } = props;

  return (
    <div>
      <input
        className="button"
        type="button"
        value="people"
        onClick={(event) => pickAsearch(event)}
      />
      <input
        className="button"
        type="button"
        value="planets"
        onClick={(event) => pickAsearch(event)}
      />
      <input
        className="button"
        type="button"
        value="vehicles"
        onClick={(event) => pickAsearch(event)}
      />
    </div>
  );
};

ButtonContainer.propTypes = {
  pickAsearch: PropTypes.func.isRequired
};