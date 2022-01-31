import React from "react"
import AddNewFood from "./addNewFood"
import DisplayDay from "./displayDay"

const order = {
  'Breakfast': 1,
  'Morning snack': 2,
  'Lunch': 3,
  'Afternoon snack': 4,
  'dinner': 5,
  'Night snack': 6
}

const style = {
  backgroundImage: 'url(./images/new-day.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed'
}

const Day = (props) => {
  const [meals, setMeals] = React.useState([])
  const [name, setName] = React.useState('')

  const removeFood = (food, time) => {
    let singlePart = meals.find(s => s.time === time)
    singlePart.foods = singlePart.foods.filter(f => f.foodName !== food)
    let updatedDay = meals.filter(s => s.time !== time)
    if(singlePart.foods[0]) {
      updatedDay.push(singlePart)
    }
    setMeals(updatedDay.sort((a, b) => a.time.localeCompare(b.time)))
  }

  const addNewFood = (food, time) => {
    let updatedDay = meals
    let singlePart = updatedDay.filter(e => e.time === time)[0]
    if(!singlePart) {
      singlePart = { time, foods: [] }
      updatedDay.push(singlePart)
    }
    singlePart.foods.push(food)
    updatedDay = updateAndSortDay(updatedDay, singlePart, time)
    setMeals(updatedDay)
  }

  const updateAndSortDay = (updatedDay, newPart, time) => (
    updatedDay.map( e => {
      if (e.time !== time) {
        return e
      }
      return newPart
    }).sort((a, b) => order[a.time] - order[b.time])

    )

    const handleFoodSubmit = e => {
      e.preventDefault()
      const msg = validate()
      if (msg) {
        return alert(alertMsg(msg))
      }

      const data = { day: { day_foods: meals, name, user_id: props.userId } }

      sendRequest(data)
    }

    const alertMsg = msgs => (
      `There were some errors: \n -${msgs.join(' \n -')}`
    )

    const validate = () => {
      const msg = []
      if(name.length < 3) {
        msg.push('Name needs to be longer than 3 characters')
      }
      if(meals.length === 0) {
        msg.push('Day can not be empty')
      }
      return msg.length > 0 ? msg : false
    }

    const sendRequest = data => {
      fetch('api/v1/days', {
        method: 'POST',
        headers:  {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
          mode: 'cors',
          body: JSON.stringify(data)
        })
        .then(props.history.push(`/users/${props.userId}`))
        .catch(err => alert(err))
    }

  const discardDay = () => setMeals([])

  const handleNameChange = e => setName(e.target.value)

  return <div className='main new-day' style={style}>
    <AddNewFood
      addNewFood={addNewFood}
      discardDay={discardDay}
      name={name}
      handleNameChange={handleNameChange}
      handleFoodSubmit={handleFoodSubmit}
    />
    <DisplayDay day={meals} removeFood={removeFood} />
  </div>
}

export default Day