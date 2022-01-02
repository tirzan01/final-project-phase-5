import React from "react"
import DailyPlan from "./dailyPlan"
import Description from "./description"
import Login from "./login"

const Home = ({ user }) => {
  return <div className="home main">
    {
      user
      ?
      <Login />
      :
      <DailyPlan />
    }
    <Description />
  </div>
}

export default Home