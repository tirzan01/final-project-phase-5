import React from "react"
import { NavLink } from "react-router-dom"

const style = {
  marginRight: '20px',
  fontSize: '20px',
  backgroundColor: 'white',
  borderRadius: '10px',
  padding: '3px',
  color: 'black'
}

const activeStyle = {}

const NavBar = ({ userId }) => (
  <div id='nav-bar'>
    <NavLink to='/' exact style={style} activeStyle={activeStyle}>Home</NavLink>
    {/* <NavLink to='/about' exact style={style} activeStyle={activeStyle}>About</NavLink> */}
    <NavLink to='/explore' exact style={style} activeStyle={activeStyle}>Explore🔥</NavLink>
    {
      userId
      ?
      <NavLink to={`/users/${userId}`} exact style={style} activeStyle={activeStyle}>Profile</NavLink>
      :
      null
    }
  </div>
)

export default NavBar

