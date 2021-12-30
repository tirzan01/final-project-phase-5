import React from "react"
import DisplayDays from "./displayDays"
import DisplayGoals from "./displayGoals"

class ProfileFooter extends React.Component {
  constructor() {
    super()

    this.state = {
      display: 'days'
    }
  }

  handleClick = e => {
    this.setState({ display: e.target.name })
  }

  render() {
    return <div className='profile-footer'>
      <div className='profile-footer-btns'>
        <button className='toogle-profile-footer-btn' name='days' onClick={this.handleClick}>
          Days
        </button>
        <button className='toogle-profile-footer-btn' name='goals' onClick={this.handleClick}>
          Goals
        </button>
      </div>
      <div className='profile-footer-display'>
        {
          this.state.display === 'days'
          ?
          <DisplayDays user={this.props.user} />
          :
          <DisplayGoals user={this.props.user} />
        }
      </div>
    </div>
  }
}

export default ProfileFooter