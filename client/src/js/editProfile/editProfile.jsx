import React from "react"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Popover from '@mui/material/Popover';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

const theme = createTheme();

const img = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const bg = [1, 2, 3, 4, 5, 6, 7]

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
  const [anchorProfile, setAnchorProfile] = React.useState(null);
  const [anchorBg, setAnchorBg] = React.useState(null);
  const [profileImg, setProfileImg] = React.useState(null)
  const [bgImg, setBgImg] = React.useState(null)

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

  const openProfile = Boolean(anchorProfile);
  const idProfile = openProfile ? 'simple-popover' : undefined;
  const openBg = Boolean(anchorBg);
  const idBg = openBg ? 'simple-popover' : undefined;

  React.useEffect(() => {
    fetch(`api/v1/users/${props.userId}`)
      .then(resp => resp.json())
      .then(user => {
        setUser(user.user)
        setProfileImg(user.user.profile_img)
        setBgImg(user.user.bg_img)
      })
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
    if (editPassword) {
      if(data.password !== data.password_confirmation) {
        msg.push('Passwords do not match')
      }
      console.log(data.password)
      if (data.password) {
        msg.push('Passwords results blank... if you do not desire to change password ensure to press cancel to remove the change password option')
      }
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
      msg.push('Email is invalid')
    }
    return msg.length === 0 ? false : msg
  }

  const sendRequest = (data) => {
    fetch(`api/v1/users/${props.userId}`, {
      method: 'PATCH',
      headers:  {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      mode: 'cors',
      body: JSON.stringify({user: data})
    })
      .then(resp => resp.json())
      .then(user => props.history.push(`/users/${props.userId}`))
      .catch(err => alert(err))
  }

  const createData = (data) => {
    let newData = {
      user_name: data.get('username'),
      email: data.get('email'),
      bio: data.get('bio'),
      profile_img: profileImg,
      bg_img: bgImg,
    }
    if (editPassword) {
      newData['password'] = data.get('password')
      newData['password_confirmation'] = data.get('confirm-password')
    }
    return newData
  }

  return <div style={style}>
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
              Edit Profile
            </Button>
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