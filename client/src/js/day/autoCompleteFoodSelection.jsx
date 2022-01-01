import React from "react"

const AutoCompleteFoodSelection = ({ displayFood, handleClick }) => {
  return <div id='auto-complete-food-box'>
    {
      displayFood.map(f => (
        <div
          key={f.id}
          className='auto-complete-single-food'
          onClick={() => handleClick(f.name, f.id)}
        >
          {f.name}
        </div>
      ))
    }
  </div>
}

export default AutoCompleteFoodSelection