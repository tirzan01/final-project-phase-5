import React from "react"
import FollowBtn from "./followBtn"
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button'

const btnStyle = {
  width: '400px',
  marginBottom: '20px',
  marginLeft: '25px'
}

const UserInfos = ({ user, followed, followInfo, daysCount }) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontSize: '18px'
  }));

  return (
    <div className='user-infos'>
      <h1 className='user-name'>
        {user.userName}
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={4}
        >
          <Item>
            <h4>{followInfo.followers}</h4> followers
          </Item>
          <Item>
            <h4>{followInfo.followed}</h4> followed
          </Item>
          <Item>
            <h4>{daysCount}</h4> days created
          </Item>
        </Stack>
      </h1>
      {
        followed === null
        ?
        <Button variant="contained" href="/edit-profile" style={{ ...btnStyle, color: 'white' }}>
          edit Profile
        </Button>
        :
        <FollowBtn userId={user.id} followed={followed} btnStyle={btnStyle} />
      }
      <div style={{ width: 400 }}>
        <Item style={{ textAlign: "left", overflowX: 'hidden', padding: 10 }}>
          <h4>Bio</h4>
          <h5 className='bio-box' style={{ width: 380 }}>{user.bio}</h5>
        </Item>
      </div>
    </div>
  )
}

export default UserInfos