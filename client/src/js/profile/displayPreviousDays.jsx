import React from "react"
import DisplaySingleDay from "./displaySingleDay"
import DisplaySinglePreviousDay from "./displaySinglePreviousDay"

const DisplayPreviousDays = ({ userId }) => {
  const [days, setDays] = React.useState([])

  React.useEffect(() => {
    fetch(`http://localhost:4000/api/v1/users/${userId}/selected_days`)
    .then(resp => resp.json())
    .then(days => {
      setDays(days)
    })
    // .catch(err => console.log(err))
  }, [])

  return <div>
    {days.map(day => <DisplaySinglePreviousDay key={day.id} day={day.day} userId={userId} date={day.date} />)}
  </div>
}

export default DisplayPreviousDays