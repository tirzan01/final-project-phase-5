import React from "react"
import NavBar from "./navbar"

const Header = ({ user }) => {
  return (
    <div id='header'>
      <img id='logo' src='./images/logo.jpg' alt='logo' />
      <NavBar user={user} />
    </div>
  )
}

export default Header