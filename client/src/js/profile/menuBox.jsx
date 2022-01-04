import React from "react"

const MenuBox = (props) => {
  const nextPath = (path) => {
    props.history.push(path)
  }

  return <div className='menu-box'>
    {console.log(props)}
    <button className='menu-btn' onClick={() => nextPath('/info')}>My info</button>
    <button className='menu-btn' onClick={() => nextPath('/day')}>New day</button>
    <button className='menu-btn' onClick={() => nextPath('/')}>Log out</button>
  </div>
}

export default MenuBox