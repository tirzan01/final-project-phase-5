import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import React from 'react';
import Header from './js/header/header';
import Profile from './js/profile/profile';
import Day from './js/day/newDay';
import Home from './js/home/home';
import SignUp from './js/singup/signUp';
import { useCookies } from "react-cookie";
import Explore from './js/explore/explore';
import SimpleDialogDemo from './js/test/dialog';
import OwnProfile from './js/profile/ownProfile';
import SetDay from './js/set-day/setDay';
import AboutContainer from './js/about/aboutContainer';
import EditProfile from './js/editProfile/editProfile';

const App = (props) => {
  const [cookies, setCookie] = useCookies(["user_id"]);

  const login = user_id => {
    setCookie('user_id', user_id, { path: '/' })
  }

  const logout = () => {
    fetch('/api/v1/logout', {
      method: 'POST'
    })
    setCookie('user_id', '', { path: '/' })
  }

  return (
    <BrowserRouter>
      {/* {logout()} */}
      <Route path="/" render={props => <Header {...props} userId={cookies.user_id} />} />
      <Route exact path="/" render={props => <Home {...props} userId={cookies.user_id} login={login} />} />
      <Route path='/users/:id' render={props => <Profile {...props} userId={cookies.user_id} logout={logout} />} />
      <Route exact path="/day" render={props => <Day {...props} userId={cookies.user_id} />} />
      <Route exact path="/signup" render={props => <SignUp {...props} login={login} />} />
      <Route exact path="/explore" render={props => <Explore {...props} userId={cookies.user_id} />} />
      <Route exact path="/about" render={props => <AboutContainer {...props} userId={cookies.user_id} />} />
      <Route exact path="/set-day" render={props => <SetDay {...props} userId={cookies.user_id} />} />
      <Route exact path="/edit-profile" render={props => <EditProfile {...props} userId={cookies.user_id} />} />
      <Route exact path="/test" render={props => <SimpleDialogDemo {...props} userId={cookies.user_id} />} />
    </BrowserRouter>
  )
}

export default App;