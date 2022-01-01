import React from "react"
import SelectFood from "./selectFood"
import SelectName from "./selectName"
import SelectTime from "./selectTime"
import SelectQty from "./selectQty"

class AddNewFood extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      time: '',
      foodName: '',
      foodId: null,
      qty: ''
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    const newFood = {
      foodName: this.state.foodName,
      foodId: this.state.foodId,
      qty: this.state.qty
    }
    this.props.addNewFood(newFood, this.state.time)
    this.setState({
      time: '',
      foodName: '',
      foodId: null,
      qty: ''
    })
  }

  handleClick = (foodName, foodId) => {
    this.setState({foodName, foodId})
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return <div id='add-new-food'>
      <h1>Add new food</h1>
      <div className='new-food-input'>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <SelectName handleChange={this.handleChange} name={this.state.name} /><br/>
          <SelectTime handleChange={this.handleChange} time={this.state.time} /><br/>
          <SelectFood handleChange={this.handleChange} food={this.state.foodName} handleClick={this.handleClick} /><br/>
          <SelectQty handleChange={this.handleChange} qty={this.state.qty} /><br/>
          <input type="submit" value='Add new food' id='add-new-food-btn' />
        </form>
        <button className='new-day-btn create'>Create New Day</button>
        <button className='new-day-btn discard' onClick={this.props.discardDay}>
          Discard Day
          </button>
      </div>
    </div>
  }
}

export default AddNewFood