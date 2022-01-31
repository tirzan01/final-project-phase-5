import React from "react"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Chip from '@mui/material/Chip';

const theme = createTheme();

const style = {
  backgroundImage: 'url(../images/signup.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed'
}

const EditProfile = (props) => {
  const [charLeft, setCharLeft] = React.useState(50)
  const [editPassword, setEditPassword] = React.useState(false)
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    fetch(`api/v1/users/${props.userId}`)
      .then(resp => resp.json())
      .then(user => setUser(user.user))
  }, [])

  const handleSubmit =  e => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget);

    const data = createData(formData)

    const msg = isInvalid(data)

    if(msg) {
      return alert(alertMsg(msg))
    }

    sendRequest(data)
  }

  const alertMsg = msgs => (
    `There were some errors during your sign up \n -${msgs.join(' \n -')}`
  )

  const isInvalid = (data) => {
    const msg = []
    if(data.password !== data.password_confirmation) {
      msg.push('Passwords do not match')
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
      msg.push('Email is invalid')
    }
    return msg.length === 0 ? false : msg
  }

  const sendRequest = (data) => {
    fetch('api/v1/users', {
      method: 'POST',
      headers:  {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      mode: 'cors',
      body: JSON.stringify({user: data})
    })
      .then(resp => resp.json())
      .then(user => {})
      .catch(err => alert(err))
  }

  const createData = (data) => (
    {
      user_name: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
      password_confirmation: data.get('confirm-password'),
      bio: data.get('bio'),
      profile_img: 1,
      bg_img: 1
    }
  )

  return <div style={style}>
    {console.log(user)}
    {
      user
      ?
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs" style={{ padding: 50, backgroundColor: 'white', width: 800 }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  defaultValue={user.user_name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  defaultValue={user.email}
                />
              </Grid>
              {
                editPassword
                ?
                <React.Fragment>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="confirm-password"
                      label="Confirm Password"
                      type="password"
                      id="confirm-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="outlined" fullWidth onClick={() => setEditPassword(false)}>
                      Cancel
                    </Button>
                  </Grid>
                </React.Fragment>
                :
                <Grid item xs={12}>
                  <Button variant="contained" fullWidth onClick={() => setEditPassword(true)}>
                    Edit Password
                  </Button>
                </Grid>
              }
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="bio"
                  label="Bio"
                  multiline
                  rows={4}
                  name="bio"
                  inputProps={{ maxLength: 60 }}
                  onChange={e => setCharLeft(60 - e.target.value.length)}
                  defaultValue={user.bio}
                />
              </Grid>
              <div style={{ marginTop: 5,  marginLeft: 250 }}>
                <Chip label={`${charLeft} characters left`} variant="outlined" />
              </div>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    :
    null
    }
  </div>
}

export default EditProfile