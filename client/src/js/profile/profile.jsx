import React from "react"
import CircularProgress from '@mui/material/CircularProgress';
import OwnProfile from "./ownProfile"
import VisitorProfile from "./visitorProfile"


const Profile = (props) => {
  const [user, setUser] = React.useState(null)

  const style = {
    backgroundImage: user ? `url(../images/background${user.user.bg_img}.jpg)` : null,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  }

  React.useEffect(() => {
    fetch(`http://localhost:4000/api/v1/users/${props.match.params.id}`)
      .then(resp => resp.json())
      .then(user => setUser(user))
  }, [])

  return <div className="main" style={{ ...style }}>
    {
      user
      ?
      (
        user.curr_user_profile
        ?
        <OwnProfile {...props} user={user.user} followInfo={user.follow_info} logout={props.logout} daysCount={user.days_count} />
        :
        <VisitorProfile {...props} user={user.user} followed={user.followed} followInfo={user.follow_info} daysCount={user.days_count} />
      )
      :
      <CircularProgress />
    }
  </div>
}

export default Profile