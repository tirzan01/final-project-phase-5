import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from 'react';
import Header from './js/header/header';

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
        profilePic: './images/avocado.jpg'
      }
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" render={props => <Header {...props} user={this.state.user} />} />
            <Route exact path="/testing">
              <h1>Test Route('/testing')</h1>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
