import React from 'react'
import './ScrollContainer.css'

export const ScrollContainer = (props)=>{
  return (
    <div className="scroll-container">
      I am a ScrollContainer
      <p>{props.movieText}</p>
      <p>{props.title}</p>
      <p>{props.year}</p>
    </div>
  )

}