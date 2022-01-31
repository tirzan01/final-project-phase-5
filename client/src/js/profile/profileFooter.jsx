import React from "react"
import DisplayDays from "./displayDays"
import DisplayPreviousDay from "./displayPreviousDays"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const ProfileFooter = ({ userId }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    width: 600,
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 0,
    marginTop: 10,
    borderRadius: 10
  }

  return <div className='profile-footer' style={style}>
    <div className='profile-footer-btns'>
      <Box sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: '10px' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="All Days" style={{ width: '40%' }}/>
          <Tab label="Previous Days" style={{ width: '40%' }}/>
        </Tabs>
      </Box>
    </div>
    <div
      className='profile-footer-display'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {
        value === 0
        ?
        <DisplayDays userId={userId} />
        :
        <DisplayPreviousDay userId={userId} />
      }
    </div>
  </div>
}

export default ProfileFooter