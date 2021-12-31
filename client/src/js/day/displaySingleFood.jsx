import React from "react"

const DisplaySingleFood = ({ f, handleClick }) => (
  <div className='single-food-qty-display' >
    <div className='food-name-display-day'>name: {f.food}</div>
    <div className='food-qty-display-day'>quantity: {f.qty}</div>
    <button
      className='remove-food-display-day'
      onClick={() => handleClick(f.food)}>
      X
    </button>
    <br/>
  </div>
)

export default DisplaySingleFood