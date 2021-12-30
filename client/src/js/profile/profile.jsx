import React from "react"
import UserInfos from "./userInfos"
import ProfileFooter from "./profileFooter"

const Profile = ({ user }) => {
  return <div className='main'>
    <h1 className='menu-sign'>&equiv;</h1>
    <div className='profile-header'>
      <img src={user.profileImg} alt='profile picture' className='profileImg' />
      <UserInfos user={user} />
    </div>
    <div className='profile-footer'>
      <ProfileFooter />
    </div>
  </div>
}

export default Profile