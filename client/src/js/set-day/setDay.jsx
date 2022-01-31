import React from "react"
import DisplayDaySearch from "./displayDaySearch"
import DisplaySelectedDay from "./displaySelectedDay"
import Button from '@mui/material/Button';

const style = {
  backgroundImage: 'url(./images/set-day.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed'
}

const daySearchStyle = {
  backgroundColor: 'white',
  padding: 20,
  marginRight: 100,
  borderRadius: 10,
  height: 'fit-content'
}

const SetDay = ({ userId }) => {
  const [savedDays, setSavedDays] = React.useState([])
  const [selectedDayId, setSelectedDayId] = React.useState(null)

  React.useEffect(() => {
    fetch(`api/v1/users/${userId}/days`)
      .then(resp => resp.json())
      .then(days => {
        const arrangedDays = days.map(day => arrangeDay(day))
        setSavedDays(arrangedDays)
      })
      .catch(err => console.log(err))

      fetch(`api/v1/selected_days/today`)
        .then(resp => resp.json())
        .then(day => setSelectedDayId(day.day_id))
  }, [])

  const selectDay = id => setSelectedDayId(id)

  const arrangeDay = day => {
    const arrangeMeals = []
    for (const meal of day.meals) {
      let getTimeIndex = arrangeMeals.map(m => m.time).indexOf(meal.time)
      if(getTimeIndex < 0) {
        arrangeMeals.push({time: meal.time, foods: []})
        getTimeIndex = arrangeMeals.length - 1
      }
      arrangeMeals[getTimeIndex].foods.push(meal)
    }
    return {
      day_info: day.day_info,
      meals: arrangeMeals,
      user_name: day.user_name,
      likes: day.likes,
      times_used: day.times_used,
    }
  }

  return <div className="main set-day" style={style}>
    <div className="select-set-days" style={daySearchStyle}>
      <h1>Set New Day</h1>
      <Button
        variant="outlined"
        href="/day"
        style={{ width: '100%', marginBottom: 15, marginTop: 15 }}
        >
        + Create New Day
      </Button>
      {savedDays.map(day => (
        <DisplayDaySearch
          key={day.day_info.id}
          day={day}
          selectDay={selectDay}
          dayId={selectedDayId}
        />
      ))}
    </div>
    <div className="display-set-day" style={{ width: 600, position: "fixed", right: 40 }}>
      <DisplaySelectedDay dayId={selectedDayId} />
    </div>
  </div>
}

export default SetDay