import React from "react"
import DailyPlan from "./dailyPlan"
import Description from "./description"
import Login from "./login"

const Home = (props) => {
  return <div id="home" className='main'>
    {
      props.user
      ?
      <DailyPlan />
      :
      <Login {...props}/>
    }
    <Description />
  </div>
}

export default Home