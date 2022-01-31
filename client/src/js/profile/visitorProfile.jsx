import React from "react"
import UserInfos from "./userInfos"
import ProfileFooter from "./profileFooter"
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const VisitorProfile = ({ user, followed, followInfo, daysCount }) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontSize: '18px'
  }));

  return <div>
    <div className='profile-header' style={{ textTransform: "capitalize" }}>
      <div style={{ marginRight: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ bgcolor: red[500], width: 150, height: 150, fontSize: '100px', marginTop: '30px' }} aria-label="recipe">
          {user.user_name.split('')[0]}
        </Avatar>
        <Item style={{ marginTop: 10 }}>
          <h1>{user.user_name}</h1>
          <p>{user.first_name} {user.last_name}</p>
        </Item>
      </div>
      <UserInfos user={user} followed={followed} followInfo={followInfo} daysCount={daysCount} />
    </div>
    <div className='profile-footer' style={{  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ProfileFooter userId={user.id} />
    </div>
  </div>
}

export default VisitorProfile