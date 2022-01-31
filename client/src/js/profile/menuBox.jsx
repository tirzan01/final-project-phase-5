import React from "react"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const MenuBox = (props) => {
  const nextPath = (path) => {
    props.history.push(path)
  }

  const handleLogout = () => {
    props.logout()
    nextPath('/')
  }

  return <div>
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            {...bindTrigger(popupState)}
            style={{ fontSize: 15 }}
          >
            Menu
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => nextPath('/info')}> EditProfile</MenuItem>
            <MenuItem onClick={() => nextPath('/day')}>New day</MenuItem>
            <MenuItem onClick={() => nextPath('/set-day')}>Set day</MenuItem>
            <MenuItem onClick={handleLogout}>Log out</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  </div>
}

export default MenuBox

// export default function MenuPopupState() {
//   return (
    
//   );
// }