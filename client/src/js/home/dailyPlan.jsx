import React from "react"
import DisplaySelectedDay from "../set-day/displaySelectedDay"
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';

const DailyPlan = (props) => {
  const [selectedDayId, setSelectedDayId] = React.useState(null) 
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    const selectedDay = newValue === 0 ? 'today' : 'tomorrow'
    props.changeSelectedDay(selectedDay)
    setValue(newValue);
  }

  React.useEffect(() => {
    fetch(`api/v1/${props.day}`)
        .then(resp => resp.json())
        .then(day => day.day_id ? setSelectedDayId(day.day_id) : setSelectedDayId(null))
  }, [props.day])

  return <div className="daily-plan">
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Today's plan" />
        <Tab label="Tomorrow's plan" />
        </Tabs>
      </Box>
    <DisplaySelectedDay dayId={selectedDayId} />
    {
      props.day === 'tomorrow'
      ?
      <Button variant="contained" href="/set-day" style={{ marginTop: '20px', color: 'white' }}>
        Set different day
      </Button>
      :
      null
    }
  </div>
}

export default DailyPlan
