import React from "react"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';

const DisplayUserSearch = ({ user }) => {
  return <div
    className="user-search"
    style={{ textTransform: "capitalize" }}
  >
    <Card sx={{ width: 600, marginTop: '1px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {user.user_name.split('')[0]}
          </Avatar>
        }
        action={
          <Button>
            <a href={`/users/${user.id}`}>
              view profile
            </a>
          </Button>
        }
        title={user.user_name}
        subheader={`${user.first_name} ${user.last_name}`}
      />
    </Card>
  </div>
}

export default DisplayUserSearch