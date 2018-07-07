import React from 'react';

export const ButtonContainer = (props) => {
  const { pickAsearch } = props;



  return (
    <div>
      <input
        type="button"
        value="people"
        onClick={() => pickAsearch('people')}
      />
      <input
        type="button"
        value="planets"
        onClick={() => pickAsearch('planets')}
      />
      <input
        type="button"
        value="vehicles"
        onClick={() => pickAsearch('vehicles')}
      />
    </div>
  );
};