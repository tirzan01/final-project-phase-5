import React from "react"

const LoginForm = () => {
  const [userName, setUserName] = React.useState('')
  const [password, setPassword] = React.useState('')

  return <div id="login-form">
    <label htmlFor='user-name' className='sign-in-label'>User name:</label><br/>
    <input
      type='text'
      name='user-name'
      className='log-in-input'
      value={userName}
      onChange={e => setUserName(e.target.value)}
      placeholder='User name'
    /><br/>

    <label htmlFor='password' className='sign-in-label'>Password:</label><br/>
    <input
      type='password'
      name='password'
      className='log-in-input'
      value={password}
      onChange={e => setPassword(e.target.value)}
      placeholder='Password'
    /><br/>
    <button type="submit" className='log-in-btn' id='login-btn'>Log in</button>
  </div>
}

export default LoginForm