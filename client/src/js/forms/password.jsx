import React from "react"

const Passsword = ({ type }) => {
  const types = {
    normal: 'Password',
    confirm: 'Confirm password',
    old: 'Old password'
  }

  return <React.Fragment>
    <label htmlFor="password" className='form-label'>{types[type]}:</label>
    <input
      type='password'
      name='password'
      className="input-form"
      placeholder={types[type]}
    />
  </React.Fragment>
}

export default Passsword