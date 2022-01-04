import React from "react"

const Dob = () => {
  return <React.Fragment>
    <label htmlFor="d-o-b" className='form-label'>D.o.B. :</label>
    <input
      type='date'
      name='d-o-b'
      className="input-form"
    />
  </React.Fragment>
}

export default Dob