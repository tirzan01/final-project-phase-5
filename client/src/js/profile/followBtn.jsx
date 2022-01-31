import React from "react"
import Button from '@mui/material/Button'

const FollowBtn = ({ userId, followed, btnStyle }) => {
  const [followStatus, setFollowStatus] = React.useState(followed)

  const follow = () => {
    fetch(`http://localhost:4000/api/v1/users/${userId}/follow`, { method: 'POST' })
      .then(() => {
        setFollowStatus(true)
      })
      .catch(err => console.log(err))
  }

  const unfollow = () => {
    fetch(`http://localhost:4000/api/v1/users/${userId}/unfollow`, { method: 'POST' })
      .then(() => {
        setFollowStatus(false)
      })
      .catch(err => console.log(err))
  }

  return <div className="follow-btn">
     {
        followStatus
        ?
        <Button variant="outlined" onClick={unfollow} style={{ ...btnStyle, backgroundColor: 'white' }}>
          Unfollow
        </Button>
        :
        <Button variant="contained" onClick={follow} style={btnStyle}>
          Follow
        </Button>
      }
  </div>
}

export default FollowBtn
