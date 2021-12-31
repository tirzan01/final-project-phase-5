import React from "react"


const SelectQty = ({ handleChange, qty }) => (
  <React.Fragment>
    <label htmlFor="qty">Name:</label>
    <input type="text" name='qty' placeholder='quantity' value={qty} onChange={handleChange} />
  </React.Fragment>
)

export default SelectQty