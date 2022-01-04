import React from "react"

const DisplaySingleFood = ({ f, handleClick }) => (
  <div className='single-food-qty-display' >
    <div className='food-name-display-day'>name: {f.foodName}</div>
    <div className='food-qty-display-day'>quantity: {f.qty}g</div>
    <button
      className='remove-food-display-day'
      onClick={() => handleClick(f.foodName)}>
      X
    </button>
    <br/>
  </div>
)

export default DisplaySingleFood