import React from "react"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const options = [
  'Breakfast',
  'Morning snack',
  'Lunch',
  'Afternoon snack',
  'dinner',
  'Night snack'
]

const SelectTime = ({ handleChange, time }) => (
  <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} style={{ backgroundColor: 'white', borderRadius: 5, width: 250 }}>
    <InputLabel id="demo-simple-select-filled-label">Time</InputLabel>
    <Select
      labelId="demo-simple-select-filled-label"
      id="demo-simple-select-filled"
      value={time}
      onChange={e => handleChange(e.target.value)}
    >
      {options.map((opt, i) => <MenuItem key={i} value={opt}>{opt}</MenuItem>)}
    </Select>
  </FormControl>
  )

export default SelectTime
