import React from "react"
import UserInfos from "./userInfos"
import ProfileFooter from "./profileFooter"
import MenuBox from "./menuBox"
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const OwnProfile = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontSize: '18px'
  }));

  return <div>
    <div
      className='menu-sign'
    >
      <MenuBox {...props} logout={props.logout} />
    </div>
    <div className='profile-header' style={{ textTransform: "capitalize" }}>
      <div style={{ marginRight: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar
          alt={props.user.user_name}
          // src={`/images/avatar${props.user.profile_img}.jpg`}
          sx={{ width: 150, height: 150 }}
        />
    <Item style={{ marginTop: 10 }}>
        <h1>{props.user.user_name}</h1>
        <p>{props.user.first_name} {props.user.last_name}</p>
    </Item>
      </div>
      <UserInfos user={props.user} followInfo={props.followInfo} followed={null} daysCount={props.daysCount} />
    </div>
  <div className='profile-footer' style={{  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <ProfileFooter userId={props.user.id} />
  </div>
</div>
}

export default OwnProfile