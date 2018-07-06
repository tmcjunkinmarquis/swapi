import React from 'react'
import './Card.css'

const Card = (props)=>{
  return(
    <div className="card">
      {props.name}
      
    </div>
  )
}

export default Card;