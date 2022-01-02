import React, { useEffect } from "react"
import DayNutrientsDetails from "./dayNutrientsDetails"
import DisplayFoodTimeContainer from "./DisplayFoodTimeContainer"

const DisplayDay = ({ day, removeFood }) => {
  const [ids, setIds] = React.useState({})

  const retreiveIds = () => {
    const ids = {}
    //ids is an object with food id as a key and amount in grams as a value(e.g. 2: 200)
    for (const elem of day) {
      for (const food of elem.foods) {
        ids[food.foodId] ||= 0
        ids[food.foodId] += parseInt(food.qty)
      }
    }
    setIds(ids)
  }

  useEffect(() => {
    retreiveIds()
  }, [day])

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
            removeFood={removeFood}
          />
        ))
        :
        <h1 id='display-day-no-food'>Nothing added yet</h1>
      }
    </div>
    <DayNutrientsDetails ids={ids} />
  </div>
}

export default DisplayDay