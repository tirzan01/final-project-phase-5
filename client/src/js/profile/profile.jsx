import React from "react"
import UserInfos from "./userInfos"
import ProfileFooter from "./profileFooter"
import MenuBox from "./menuBox"

class Profile extends React.Component {
  constructor() {
    super()

    this.state = {
      menuBoxActive: false
    }
  }

  toogleMenuBox = () => {
    this.setState(({ menuBoxActive }) => {
      return { menuBoxActive: !menuBoxActive }
    })
  }

  render() {
    return <div className='main'>
      <button className='menu-sign' onClick={this.toogleMenuBox} >&equiv;</button>
      {this.state.menuBoxActive ? <MenuBox {...this.props} /> : null}
      <div className='profile-header'>
        <img src={this.props.user.profileImg} alt='profile picture' className='profileImg' />
        <UserInfos user={this.props.user} />
      </div>
      <div className='profile-footer'>
        <ProfileFooter user={this.props.user} />
      </div>
    </div>
  }
}

export default Profile