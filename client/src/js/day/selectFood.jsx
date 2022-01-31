import React from "react"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SelectFood = ({ handleChange, food, handleSelect, value }) => {
  const [displayFood, setDisplayFood] = React.useState([])


  const handleFoodChange = (event, newValue) => {
    handleChange(newValue)
    fetch(`/api/v1/foods?q=${newValue}`)
      .then(resp => resp.json())
      .then(foods => {
        // let displayFood = foods.filter(f => f.name.toLowerCase().startsWith(e.target.value.toLowerCase())).slice(0, 3)
        setDisplayFood(foods)
      })
  }

  const handleFoodSelection = (value, newValue) => {
    handleSelect(newValue)
  }

  return <div>
    <Autocomplete
      value={value}
      onChange={handleFoodSelection}
      inputValue={food}
      onInputChange={handleFoodChange}
      id="controllable-states-demo"
      options={displayFood}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Food name" />}
      style={{ backgroundColor: 'white', borderRadius: 5, width: 260 }}
    />
  </div>
}

export default SelectFood



