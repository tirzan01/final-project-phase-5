import React from "react"
import ExploreDay from "./exploreDay"
import ExploreUser from "./exploreUser"
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Explore = ({userId}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return <div style={mainDivStyle}>
    <div id='dumb-id' style={smallerDivStyle}>
      <Box sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: '10px', paddingTop: '70px' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Day" />
          <Tab label="User" />
        </Tabs>
      </Box>
        {
          value === 0
          ?
          <ExploreDay userId={userId} />
          :
          <ExploreUser userId={userId} />
        }
    </div>
  </div>
}

const mainDivStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: 'url(./images/explore.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed'
}

const smallerDivStyle = {
  width: '800px',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

export default Explore