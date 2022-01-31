import React from "react"
import DayNutrientsDetails from "../day/dayNutrientsDetails"

const SelectedDayDetail = ({ day }) => {
  const [ids, setIds] = React.useState([])
  const [idNames, setIdNames] = React.useState({})

  React.useEffect(() => {
    if(day) {
      retreiveIds()
    }
  }, [day])

  const SetNames = (idNames) => {
    setIdNames(idNames)
  }

  const retreiveIds = () => {
    const ids = {}
    //ids is an object with food id as a key and amount in grams as a value(e.g. 2: 200)
    for (const meal of day.meals) {
      for (const food of meal.foods) {
        ids[food.food_id] ||= 0
        ids[food.food_id] += parseInt(food.qty)
      }
    }
    setIds(ids)
  }

  return <div>
    {
      day
      ?
      <div>
        <h1>{day.day_info.name}</h1>
        <div className="day-meals">
          {
          day.meals.map((meal, i) => (
            <div key={i}>
              <div className="meal-time">{meal.time}</div>
              <div className="meal-foods">
                {meal.foods.map((f, i) => <p key={i}>n: {idNames[f.food_id]} q: {f.qty}</p>)}
              </div>
            </div>
          ))
          }
        </div>
        <DayNutrientsDetails ids={ids} setName={setIdNames} />
      </div>
      :
      <div style={{width: 400, height: 400, backgroundColor: 'white', border: '2px solid black', marginLeft: '40px'}}>
        No day selected yet
      </div>
    }
  </div>
}

export default SelectedDayDetail