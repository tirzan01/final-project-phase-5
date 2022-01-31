import React from "react"
import SelectFood from "./selectFood"
import SelectName from "./selectName"
import SelectTime from "./selectTime"
import SelectQty from "./selectQty"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const AddNewFood = (props) => {
  const [time, setTime] = React.useState('')
  const [foodName, setFoodName] = React.useState(null)
  const [foodId, setFoodId] = React.useState(null)
  const [qty, setQty] = React.useState('')
  const [value, setValue] = React.useState(null)

  const sendBtnStyle = {width: 250, marginBottom: 15, marginTop: 20}
  const discardBtnStyle = {backgroundColor: 'white', width: 250}
  const addBtnStyle = {border: '1px solid white', marginTop: 20, width: 250, backgroundColor: 'black', color: 'white'}

  const handleSubmit = e => {
    e.preventDefault()
    const newFood = {
      foodName: foodName,
      foodId: foodId,
      qty: qty
    }
    props.addNewFood(newFood, time)
    setTime('')
    setFoodName(null)
    setQty('')
    setValue('')
  }

  const handleSelect = (food) => {
    setFoodId(food.id)
    setFoodName(food.label)
    setValue(food.label)
  }

  return <div id='add-new-food'>
    <h1>Add new food</h1>
    <div className='new-food-input'>
      <form onSubmit={handleSubmit} autoComplete="off">
        <SelectName handleChange={props.handleNameChange} name={props.name} /><br/>
        <SelectTime handleChange={(value) => setTime(value)} time={time} /><br/>
        <SelectFood handleChange={(value) => setFoodName(value)} food={foodName} handleSelect={handleSelect} value={value}/><br/>
        <SelectQty handleChange={(value) => setQty(value)} qty={qty} /><br/>
        <Button type="submit" style={addBtnStyle}>
          + Add new food
        </Button>
      </form>
      <Button variant="contained" onClick={props.handleFoodSubmit} endIcon={<SendIcon />} style={sendBtnStyle}>
        Create New Day
      </Button>
      <Button variant="outlined" onClick={props.discardDay} endIcon={<DeleteIcon />} style={discardBtnStyle}>
        Discard Day
      </Button>
    </div>
  </div>
}

export default AddNewFood