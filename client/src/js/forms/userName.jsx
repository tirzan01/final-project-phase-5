import React from "react"

const UserName = () => {
  return <React.Fragment>
    <label htmlFor="user-name" className='form-label'>User name:</label>
    <input
      type='text'
      name='user-name'
      className="input-form"
      placeholder='johnsmith74'
    />
  </React.Fragment>
}

export default UserName