import React from 'react';

export const ButtonContainer = (props) => {
  const { pickAsearch } = props;



  return (
    <div>
      <input
        type="button"
        value="people"
        onClick={(event) => pickAsearch(event)}
      />
      <input
        type="button"
        value="planets"
        onClick={(event) => pickAsearch(event)}
      />
      <input
        type="button"
        value="vehicles"
        onClick={(event) => pickAsearch(event)}
      />
    </div>
  );
};