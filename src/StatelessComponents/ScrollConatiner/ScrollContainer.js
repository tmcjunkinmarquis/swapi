import React from 'react';
import './ScrollContainer.css';

export const ScrollContainer = (props) => {

  const { openingCrawl, title, date } = props.randomMovieObject;

  return (
    <div className="board">
      <div className="content">
        <p>{`${openingCrawl}`}</p>
        <p>Title: {`${title}`} </p>
        <p>Date: {`${date}`}</p>
      </div>
    </div>
  );
};