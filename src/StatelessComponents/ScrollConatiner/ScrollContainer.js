import React from 'react'
import './ScrollContainer.css'

export const ScrollContainer = (props)=>{
  
  const { openingCrawl, title, date} = props.randomMovieObject;

  return (
    <div className="scroll-container">
      I am a ScrollContainer
      <p>{`${openingCrawl}`}</p>
      <p>Title: {`${title}`} </p>
      <p>Date: {`${date}`}</p>
    </div>
  )

}