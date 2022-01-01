import React from "react"


const SelectName = ({ handleChange, name }) => (
  <div className='add-new-food-fields select-name'>
    <label htmlFor="name" className='label-add-new-food select-name'>Name:</label>
    <input
      type="text"
      name='name'
      className='input-add-new-food select-name'
      placeholder='name'
      value={name}
      onChange={handleChange}
    />
  </div>
)

export default SelectName