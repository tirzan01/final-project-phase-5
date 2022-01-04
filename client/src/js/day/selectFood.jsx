import React from "react"
import AutoCompleteFoodSelection from "./autoCompleteFoodSelection"


const SelectFood = ({ handleChange, food, handleClick }) => {
  const [displayFood, setDisplayFood] = React.useState([])

  const [displayBox, setDisplayBox] = React.useState(false)

  const handleFoodChange = e => {
    handleChange(e)
    fetch('/foods')
      .then(resp => resp.json())
      .then(foods => {
        let displayFood = foods.filter(f => f.name.toLowerCase().startsWith(e.target.value.toLowerCase())).slice(0, 3)
        setDisplayFood(displayFood)
      })
  }

  const handleBlur = () => {
    const timeOut = setTimeout(() => {
      setDisplayBox(false)
      clearTimeout(timeOut)
    }, 500)
  }

  const handleClickAndDeleteBox = (name, id) => {
    handleClick(name, id)
    setDisplayBox(false)
    setDisplayFood([{name, id}])
  }

  return <div className='add-new-food-fields'>
    <label htmlFor="food" className='label-add-new-food'>Food:</label>
    <input
    type="text"
    name='foodName'
    className='input-add-new-food'
    placeholder='food'
    value={food}
    onChange={handleFoodChange}
    onFocus={() => setDisplayBox(true)}
    onBlur={handleBlur}
    required
  />
  {
    displayBox
    ?
    <AutoCompleteFoodSelection displayFood={displayFood} handleClick={handleClickAndDeleteBox} />
    :
    null
  }
  </div>
}

export default SelectFood



