import React from "react"


const SelectName = ({ handleChange, name }) => (
  <React.Fragment>
    <label htmlFor="name">Name:</label>
    <input type="text" name='name' placeholder='name' value={name} onChange={handleChange} />
  </React.Fragment>
)

export default SelectName