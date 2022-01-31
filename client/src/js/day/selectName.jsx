import React from "react"
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';


const SelectName = ({ handleChange, name }) => ( 
  <TextField
    label="Name"
    id="filled-start-adornment"
    sx={{ m: 1, width: '25ch' }}
    variant="filled"
    value={name}
    onChange={handleChange}
    style={{ backgroundColor: 'white', borderRadius: 5 }}
  />
)

export default SelectName