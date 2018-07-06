import React from 'react';

export const ButtonContainer = (props)=>{
  const {peopleSearch, planetSearch, vehicleSearch } = props
  
  
  return(
    <div>I am a button container
      <input 

        type="button"
        value="people"
        onClick={peopleSearch}
        />
      <input 
        type="button"
        value="planets"
        onClick={planetSearch }
        />
      <input 
        type="button"
        value="vehicles" 
        onClick={vehicleSearch}
        />
    </div>
  );
};