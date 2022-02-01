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
import EditWeight from './js/editProfile/editWeight';

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
      {/* {request()} */}
      {/* {logout()} */}
      <Route path="/" render={props => <Header {...props} userId={cookies.user_id} />} />
      <Route exact path="/" render={props => <Home {...props} userId={cookies.user_id} login={login} />} />
      <Route path='/users/:id' render={props => <Profile {...props} userId={cookies.user_id} logout={logout} />} />
      <Route exact path="/day" render={props => <Day {...props} userId={cookies.user_id} />} />
      <Route exact path="/signup" render={props => <SignUp {...props} login={login} />} />
      <Route exact path="/explore" render={props => <Explore {...props} userId={cookies.user_id} />} />
      {/* <Route exact path="/about" render={props => <AboutContainer {...props} userId={cookies.user_id} />} /> */}
      <Route exact path="/set-day" render={props => <SetDay {...props} userId={cookies.user_id} />} />
      <Route exact path="/edit-profile" render={props => <EditProfile {...props} userId={cookies.user_id} />} />
      {/* <Route exact path="/edit-weight" render={props => <EditWeight {...props} userId={cookies.user_id} />} /> */}
      <Route exact path="/test" render={props => <SimpleDialogDemo {...props} userId={cookies.user_id} />} />
    </BrowserRouter>
  )
}

export default App;

//srape foods nutrients

// const request = () => {
//   // let foodId = 9000
//   for (let foodId = 1000; foodId < 4999; foodId++) {
//     fetch(`https://api.spoonacular.com/food/ingredients/${foodId}/information?amount=100&unit=grams&apiKey=71ea31e819b045c8bd04863d340fb6b8&includeNutrition=true`)
//       .then(resp => resp.json())
//       .then(food => {
//         if(food) {
//           console.log(food.name, foodId)
//           const data = createFood(food)
//           sendFood(data)
//         }
//       })
//       .catch(() => {})
//   }


// }

// const getByName = (n, name) => {
//   return n.filter(nut => nut.name === name)[0].amount
// }

// const createFood = (food) => {
//   const n = food.nutrition.nutrients

//   return {
//     food: {
//       name: food.name,
//       calories: getByName(n, 'Calories'),
//       fibres: getByName(n, 'Fiber'),
//       sugars: getByName(n, 'Sugar'),
//       proteins: getByName(n, 'Protein'),
//       fats: getByName(n, 'Fat'),
//       carbs: getByName(n, 'Carbohydrates')
//     }
//   }
// }

// const sendFood = data => {
//   fetch('api/v1/foods', {
//     method: 'POST',
//     headers:  {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     mode: 'cors',
//     body: JSON.stringify(data)
//   })
// }