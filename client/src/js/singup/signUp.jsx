import React from "react"
import Bio from "../forms/bio"
import Dob from "../forms/dob"
import Email from "../forms/email"
import FavouriteFood from "../forms/favouriteFood"
import Firstname from "../forms/firstName"
import Height from "../forms/height"
import LastName from "../forms/lasName"
import Passsword from "../forms/password"
import Sex from "../forms/sex"
import UserName from "../forms/userName"
import Weight from "../forms/weight"

class SignUp extends React.Component {
  constructor() {
    super()

    this.state = {
      userName: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      sex: 'male',
      dob: null,
      height: '',
      currWeight: '',
      goalWeight: '',
      bio: ''
    }
  }

  render() {
    return <div className='main'>
      <h1>Sign up</h1>
      <UserName onChange={this.onChange} value={this.state.userName} />
      <Email onChange={this.onChange} value={this.state.email} /><br/>
      <Firstname onChange={this.onChange} value={this.state.firstName} />
      <LastName onChange={this.onChange} value={this.state.lastName} /><br/>
      <Passsword type={'normal'} onChange={this.onChange} value={this.state.password} />
      <Passsword type={'confirm'} onChange={this.onChange} value={this.state.confirmPassword} /><br/>
      <Sex onChange={this.onChange} value={this.state.sex} />
      <Dob onChange={this.onChange} value={this.state.dob} /><br/>
      <Height onChange={this.onChange} value={this.state.height} /><br/>
      <Weight type={'current'} onChange={this.onChange} value={this.state.currWeight} />
      <Weight type={'goal'} onChange={this.onChange} value={this.state.goalWeight} /><br/>
      <Bio onChange={this.onChange} value={this.state.bio} />
    </div>
  }
}

export default SignUp