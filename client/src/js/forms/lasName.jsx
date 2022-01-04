import React from "react"

const LastName = () => {
  return <React.Fragment>
    <label htmlFor="last-name" className='form-label'>Last name:</label>
    <input
      type='text'
      name='last-name'
      className="input-form"
      placeholder='Smith'
    />
  </React.Fragment>
}

export default LastName