import React from "react"


const SelectFood = ({ handleChange, food }) => (
  <React.Fragment>
    <label htmlFor="food">Food:</label>
    <input type="text" name='food' placeholder='food' value={food} onChange={handleChange} />
  </React.Fragment>
)

export default SelectFood