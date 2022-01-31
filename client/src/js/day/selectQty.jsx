import React from "react"
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';


const SelectQty = ({ handleChange, qty }) => (
  <div className='add-new-food-fields'>
    <TextField
      label="Quantity"
      id="filled-start-adornment"
      sx={{ m: 1, width: '25ch' }}
      InputProps={{
        startAdornment: <InputAdornment position="start">g</InputAdornment>,
      }}
      variant="filled"
      value={qty}
      onChange={e => handleChange(e.target.value)}
      style={{ backgroundColor: 'white', borderRadius: 5 }}
    />
  </div>
)

export default SelectQty