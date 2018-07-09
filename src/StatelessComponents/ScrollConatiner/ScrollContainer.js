import React from 'react';
import './ScrollContainer.css';
import PropTypes from 'prop-types';

export const ScrollContainer = (props) => {
  const { openingCrawl, title, date } = props.randomMovieObject;

  return (
    <div className="board">
      <div className="content">
        <span>{`${openingCrawl}`}</span>
        <p>Title: {`${title}`} </p>
        <p>Date: {`${date}`}</p>
      </div>
    </div>
  );
};

ScrollContainer.propTypes = {
  randomMovieObject: PropTypes.object.isRequired
};
