import React from "react"

const Firstname = () => {
  return <React.Fragment>
      <label htmlFor="first-name" className='form-label'>First name:</label>
      <input
        type='text'
        name='first-name'
        className="input-form"
        placeholder='John'
    />
    </React.Fragment>
}

export default Firstname