import React from "react"
import LoginForm from "./loginForm"

const Login = (props) => {
  const nextPath = (path) => {
    props.history.push(path)
  }

  return <div id="login">
    {console.log(props)}
    <h1 style={{background: 'white', fontSize: '40px'}}>Login</h1>
    <LoginForm />
    <button className='log-in-btn' id='facebook'>Login with Facebook</button><br/>
    <button className='log-in-btn' id='google'>Login with Google</button><br/>
    <button className='log-in-btn' id='sign-up' onClick={() => nextPath('/signup')}>Sign up</button><br/>
  </div>
}

export default Login