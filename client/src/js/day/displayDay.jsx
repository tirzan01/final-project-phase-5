import React from "react"
import DisplayFoodTimeContainer from "./DisplayFoodTimeContainer"

class DisplayDay extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    const { day } = this.props

    return <div id='display-day'>
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

  }
}

export default DisplayDay