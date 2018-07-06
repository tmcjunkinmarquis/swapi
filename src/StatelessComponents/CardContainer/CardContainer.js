import React from 'react'
import Card from '../Card/Card'
import './CardContainer.css'

const CardContainer = (props) =>{
  const { cards } = props

  const makeCards = () => {
    return cards.map(card =>{
      return <Card name={card.name}/>
    })
  }
  
  return (
    <div className="card-container">
      {makeCards()}
    </div>
  )
}

export default CardContainer;