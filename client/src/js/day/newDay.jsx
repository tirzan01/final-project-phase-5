import React from "react"
import AddNewFood from "./addNewFood"
import DisplayDay from "./displayDay"

class Day extends React.Component {
  constructor() {
    super()

    this.state = {
      day: [
        {
          time: '08:00',
          foods: [
            { food: 'banana', qty: '100' },
            { food: 'orange', qty: '50' }
          ]
        },
        {
          time:'12:00', 
          foods: [
              { food: 'banana', qty: '100' },
              { food: 'orange', qty: '50' }
            ]
        },
        {
          time:'18:00',
          foods: [
              { food: 'banana', qty: '100' },
              { food: 'orange', qty: '50' }
            ]
        },
      ]
    }
  }

  removeFood = (food, time) => {
    let singlePart = this.state.day.find(s => s.time === time)
    singlePart.foods = singlePart.foods.filter(f => f.food !== food)
    let updatedDay = this.state.day.filter(s => s.time !== time)
    if(singlePart.foods[0]) {
      updatedDay.push(singlePart)
    }
    const day = updatedDay.sort((a, b) => a.time.localeCompare(b.time))
    this.setState({ day })
  }

  addNewFood = (food, time) => {
    let day = this.state.day
    let singlePart = day.filter(e => e.time === time)[0]
    if(!singlePart) {
      singlePart = { time, foods: [] }
      day.push(singlePart)
    }
    singlePart.foods.push(food)
    day = this.updateAndSortDay(day, singlePart, time)
    this.setState({ day })
  }

  updateAndSortDay = (day, newPart, time) => (
    day.map( e => {
      if (e.time !== time) {
        return e
      }
      return newPart
    }).sort((a, b) => a.time.localeCompare(b.time))
  )

  discardDay = () => this.setState({ day: [] })

  render() {
    return <div className='main new-day'>
      <AddNewFood
        addNewFood={this.addNewFood}
        discardDay={this.discardDay}
      />
      <DisplayDay day={this.state.day} removeFood={this.removeFood} />
    </div>
  }
}

export default Day