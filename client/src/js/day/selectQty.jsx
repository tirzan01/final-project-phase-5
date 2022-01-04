import React from "react"


const SelectQty = ({ handleChange, qty }) => (
  <div className='add-new-food-fields'>
    <label htmlFor="qty" className='label-add-new-food'>Quantity (g):</label>
    <input
      type="text"
      className='input-add-new-food'
      name='qty'
      placeholder='quantity'
      value={qty}
      onChange={handleChange}
      required
    />
  </div>
)

export default SelectQty