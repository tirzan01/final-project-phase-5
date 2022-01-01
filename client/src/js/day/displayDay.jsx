import React from "react"
import DayNutrientsDetails from "./dayNutrientsDetails"
import DisplayFoodTimeContainer from "./DisplayFoodTimeContainer"

class DisplayDay extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    const { day } = this.props

    return <div>
      <div id='display-day'>
        {
          day[0]
          ?
          day.map((singlePart, i) => (
            <DisplayFoodTimeContainer
              key={i}
              time={singlePart.time}
              foods={singlePart.foods}
              removeFood={this.props.removeFood}
            />
          ))
          :
          <h1 id='display-day-no-food'>Nothing added yet</h1>
        }
      </div>
      <DayNutrientsDetails day={day} />
    </div>

  }
}

export default DisplayDay