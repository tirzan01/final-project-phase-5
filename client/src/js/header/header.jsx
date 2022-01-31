import React from "react"
import NavBar from "./navbar"

const Header = ({ userId }) => {
  return (
    <div id='header'>
      <img id='logo' src='./images/logo.jpg' alt='logo' />
      <NavBar userId={userId} />
    </div>
  )
}

export default Header