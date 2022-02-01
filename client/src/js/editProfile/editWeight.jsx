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

const style = {
  backgroundImage: 'url(../images/signup.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed'
}

const EditWeight = (props) => {
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    fetch(`api/v1/users/${props.userId}`)
      .then(resp => resp.json())
      .then(user => setUser(user))
  }, [])

  const handleSubmit =  e => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget);

    const data = createData(formData)

    sendRequest(data)
  }

  const sendRequest = (data) => {
    fetch(`api/v1/weights/${props.userId}`, {
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
      curr_weight: 80
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
              minHeight: '690px'
            }}
          >
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="bio"
                    label="Bio"
                    name="bio"
                    defaultValue={user.curr_weight}
                  />
                </Grid>
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

export default EditWeight