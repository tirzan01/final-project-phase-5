import React from "react"
import DisplaySingleDay from "../profile/displaySingleDay"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const ExploreDay = ({ userId }) => {
  const [days, setDays] = React.useState([])
  const [sortBy, setSortBy] = React.useState(userId ? 'newest-friends' : 'most-liked')

  const handleChange = (event, newValue) => {
    setSortBy(newValue);
  };

  React.useEffect(() => {
    fetch(`api/v1/days?sort=${sortBy}`)
    .then(resp => resp.json())
    .then(days => {
      setDays(days)
    })
    .catch(err => console.log(err))
  }, [sortBy])

  return <div className="explore-days" style={style}>
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={sortBy}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="newest-friends" label="Newest (followed only)" />
        <Tab value="newest-all" label="Newest (everyone)" />
        <Tab value="most-liked" label="Most liked" />
      </Tabs>
    </Box>
    {
      days.map( day => (
      <DisplaySingleDay
        userId = {userId}
        key={day.day_info.id}
        day={day}
      />
      ))
    }
  </div>
}

const style = {
  width: 650,
  minHeight: 660
}

export default ExploreDay