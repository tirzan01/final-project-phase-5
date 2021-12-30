import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from 'react';
import Header from './js/header/header';
import Profile from './js/profile/profile';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      user: {
        userName: 'user name',
        firstName: 'first name',
        lastName: 'last name',
        bio: 'this is my bio',
        followers: '100',
        followed: '50',
        profileImg: './images/avocado.jpg'
      }
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/" render={props => <Header {...props} user={this.state.user} />} />
        <Route exact path="/profile" render={props => <Profile {...props} user={this.state.user} />} />
      </BrowserRouter>
    )
  }
}

export default App;
