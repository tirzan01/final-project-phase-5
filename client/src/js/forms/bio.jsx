import React from "react"

const Bio = () => {
  return <React.Fragment>
    <label htmlFor="bio" className='form-label'>Bio:</label><br/>
    <textarea name='bio' className="input-form"/>
  </React.Fragment>
}

export default Bio