import React from "react"
import DailyPlan from "./dailyPlan"
import Description from "./description"
import Login from "./login"

const Home = (props) => {
  const [selectedDay, setSelectedDay] = React.useState('today')

  const changeSelectedDay = day => {
    setSelectedDay(day)
  }

  return <div id="home" className='main' style={style}>
    {
      props.userId
      ?
      <DailyPlan {...props} day={selectedDay} changeSelectedDay={changeSelectedDay} />
      :
      <Login {...props} login={props.login}/>
    }
  </div>
}

const style = {
  backgroundImage:'url(./images/login.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundAttachment: 'fixed'
}

export default Home