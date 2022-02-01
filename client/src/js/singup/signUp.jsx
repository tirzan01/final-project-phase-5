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
import Popover from '@mui/material/Popover';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

const theme = createTheme();

const style = {
  backgroundImage: 'url(../images/signup.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed'
}

const img = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const bg = [1, 2, 3, 4, 5, 6, 7]

const SignUp = (props) => {
  const [dob, setDob] = React.useState('')
  const [charLeft, setCharLeft] = React.useState(50)
  const [anchorProfile, setAnchorProfile] = React.useState(null);
  const [anchorBg, setAnchorBg] = React.useState(null);
  const [profileImg, setProfileImg] = React.useState(1)
  const [bgImg, setBgImg] = React.useState(1)

  const handleClickProfile = (event) => {
    setAnchorProfile(event.currentTarget);
  };

  const handleClickBg = (event) => {
    setAnchorBg(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setAnchorProfile(null);
  };

  const handleCloseBg = () => {
    setAnchorBg(null);
  };

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

  const openProfile = Boolean(anchorProfile);
  const idProfile = openProfile ? 'simple-popover' : undefined;
  const openBg = Boolean(anchorBg);
  const idBg = openBg ? 'simple-popover' : undefined;

  const alertMsg = msgs => (
    `There were some errors during your sign up \n -${msgs.join(' \n -')}`
  )

  const isInvalid = (data) => {
    const msg = []
    if(validateDob(data.dob)) {
      msg.push('Date of birth is invalid')
    }
    if(data.password !== data.password_confirmation) {
      msg.push('Passwords do not match')
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
      msg.push('Email is invalid')
    }
    return msg.length === 0 ? false : msg
  }

  const validateDob = (dob) => {
    const maxAge = '1900-01-01'
    const date = new Date(new Date().setFullYear(new Date().getFullYear() - 12))
    const minAge = date.toJSON().slice(0,10)
    return dob < maxAge || dob > minAge
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
      .then(user => {
        fetch('api/v1/login', {
          method: 'POST',
          headers:  {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          mode: 'cors',
          body: JSON.stringify({user: {user_name: user.user_name, password: data.password}})
        })
          .then(resp => resp.json())
          .then(() => {
            props.login(user.id)
            props.history.push('/')
          })
      })
      .catch(err => alert(err))
  }

  const createData = (data) => (
    {
      user_name: data.get('username'),
      email: data.get('email'),
      first_name: data.get('first-name'),
      last_name: data.get('last-name'),
      password: data.get('password'),
      password_confirmation: data.get('confirm-password'),
      sex: data.get('sex'),
      dob: dob,
      height: data.get('height'),
      curr_weight: data.get('current-weight'),
      goal_weight: data.get('goal-weight'),
      bio: data.get('bio'),
      profile_img: profileImg,
      bg_img: bgImg
    }
  )

  return (
    <div style={style}>
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
              <Grid item xs={12}>
              <Avatar 
                src={`./images/avatar${profileImg}.jpg`}
                sx={{ width: 150, height: 150, marginBottom: 2 }}
              />
              <Button fullWidth aria-describedby={idProfile} variant="contained" onClick={handleClickProfile}>
                Change Avatar
              </Button>
              <Popover
                id={idProfile}
                open={openProfile}
                anchorEl={anchorProfile}
                onClose={handleCloseProfile}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                  style={{
                    overflowX: 'scroll',
                    padding: 10
                  }}
                >
                  {
                    img.map(n => {
                      return <Paper style={{ padding: 5 }} key={n}>
                          <Avatar
                            src={`./images/avatar${n}.jpg`}
                            sx={{ width: 150, height: 150 }}
                            onClick={() => setProfileImg(n)}
                          />
                        </Paper>
                    })
                  }
                  </Stack>
                </Popover>
              </Grid>
              <Grid item xs={12}>
                <Avatar 
                  src={`./images/background${bgImg}.jpg`}
                  sx={{ width: 150, height: 150, marginBottom: 2, borderRadius: 3 }}
                />
                <Button fullWidth aria-describedby={idBg} variant="contained" onClick={handleClickBg}>
                  Change background image
                </Button>
                <Popover
                  id={idBg}
                  open={openBg}
                  anchorEl={anchorBg}
                  onClose={handleCloseBg}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                    style={{
                      overflowX: 'scroll',
                      padding: 10
                    }}
                  >
                  {
                    bg.map(n => {
                      return <Paper style={{ padding: 5 }} key={n}>
                        <Avatar
                          src={`./images/background${n}.jpg`}
                          sx={{ width: 150, height: 150, borderRadius: 3 }}
                          onClick={() => setBgImg(n)}
                        />
                      </Paper>
                    })
                  }
                  </Stack>
                </Popover>
              </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="first-name"
                    required
                    fullWidth
                    id="first-name"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="last-name"
                    label="Last Name"
                    name="last-name"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirm-password"
                    label="Confirm Password"
                    type="password"
                    id="confirm-password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{ marginRight: 20 }}>Gender *: </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="sex"
                    required
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{ marginRight: 20 }}>D.O.B. *: </FormLabel>
                  <input
                    type='date'
                    name='dob'
                    value={dob}
                    onChange={e => setDob(e.target.value)}
                    style={{ width: 200, height: 50, fontSize: 15, padding: 10, border: '1px solid rgb(195,195,195)', borderRadius: 3 }}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    InputProps={{
                      startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                    }}
                    fullWidth
                    id="current-weight"
                    label="Current Weight"
                    name="current-weight"
                    autoComplete="current-weight"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    InputProps={{
                      startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                    }}
                    fullWidth
                    id="goal-weight"
                    label="Goal Weight"
                    name="goal-weight"
                    autoComplete="goal-weight"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    InputProps={{
                      startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                    }}
                    fullWidth
                    id="height"
                    label="Height"
                    name="height"
                    autoComplete="height"
                  />
                </Grid>
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
    </div>
  );
}

export default SignUp