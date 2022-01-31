import React from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

const NewCommentForm = ({ comment, handleChange, handleSubmit }) => {
  return <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
      marginTop: '10px',
      position: 'sticky'
    }}
    noValidate
    autoComplete="off"
    onSubmit={handleSubmit}
  >
    <TextField
      id="outlined-multiline-flexible"
      label="New Comment"
      placeholder='Write something...'
      multiline
      maxRows={4}
      value={comment}
      onChange={handleChange}
      style={{ width: 300, marginLeft: 30 }}
    />
    <Button variant="contained" endIcon={<SendIcon />} type='submit' style={{ marginTop: '25px' }}>
      Send
    </Button>
  </Box>
}

export default NewCommentForm