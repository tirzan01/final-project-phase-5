import React from "react"

const Email = () => {
  return <React.Fragment>
  <label htmlFor="email" className='form-label'>Email:</label>
  <input
    type='text'
    name='email'
    className="input-form"
    placeholder='johnsmith74@gmail.com'
  />
</React.Fragment>
}

export default Email