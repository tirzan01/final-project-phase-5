import React from "react"
import DisplaySingleDay from "./displaySingleDay"

const DisplayDays = ({ userId }) => {
  const [days, setDays] = React.useState([])

  React.useEffect(() => {
    fetch(`http://localhost:4000/api/v1/users/${userId}/days`)
    .then(resp => resp.json())
    .then(days => {
      setDays(days)
    })
    // .catch(err => console.log(err))
  }, [])


  return <div>
    {days.map(day => <DisplaySingleDay key={day.day_info.id} day={day} userId={userId} />)}
  </div>
}

export default DisplayDays
