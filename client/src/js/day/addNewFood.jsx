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
      food: '',
      qty: ''
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    const newFood = {food: this.state.food, qty: this.state.qty}
    this.props.addNewFood(newFood, this.state.time)
    this.setState({
      time: '',
      food: '',
      qty: ''
    })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return <div id='add-new-food'>
      <h1>Add new food</h1>
      <div className='new-food-input'>
        <form onSubmit={this.handleSubmit}>
          <SelectName handleChange={this.handleChange} name={this.state.name} /><br/>
          <SelectTime handleChange={this.handleChange} time={this.state.time} /><br/>
          <SelectFood handleChange={this.handleChange} food={this.state.food} /><br/>
          <SelectQty handleChange={this.handleChange} qty={this.state.qty} /><br/>
          <input type="submit" value='Add new food' />
        </form>
        <button type='submit'>Create New Day</button>
        <button onClick={this.props.discardDay}>Discard Day</button>
      </div>
    </div>
  }
}

export default AddNewFood