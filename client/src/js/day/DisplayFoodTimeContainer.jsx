import React from "react"
import DisplaySingleFood from "./displaySingleFood"

const DisplayFoodTimeContainer = ({ time, foods, removeFood }) => {
  const handleClick = food => {
    removeFood(food, time)
  }

  return <div className='time-food-container'>
    <div className='time-display-day'>{time}</div>
    <div className='food-qty-container'>
      {
        foods.map((f, i) => (
          <DisplaySingleFood key={i} f={f} handleClick={handleClick} />
        ))
      }
    </div>
  </div>
}

export default DisplayFoodTimeContainer