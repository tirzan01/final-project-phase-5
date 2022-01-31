import React, { useRef } from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import NewCommentForm from "./newCommentForm";
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import { Paper } from "@mui/material";

const Comments = ({ dayId, userId }) => {
  const [comments, setComments] = React.useState([])
  const [open, setOpen] = React.useState(false);
  const [newComment, setNewComment] = React.useState('');

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true)
  };

  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    fetch(`http://localhost:4000/api/v1/days/${dayId}/comments`)
    .then(resp => resp.json())
    .then(comments => {
      setComments(comments)
    })
  }, [])

  const submitNewComment = e => {
    e.preventDefault()

    fetch(`http://localhost:4000/api/v1/days/${dayId}/comments`, {
      method: 'POST',
      headers:  {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      mode: 'cors',
      body: JSON.stringify({
        comment: {
          user_id: userId,
          day_id: dayId,
          content: newComment
        }
      })
    })
    .then(resp => resp.json())
    .then(comment => {
      const newComments = comments
      newComments.unshift(comment)
      setComments(newComments)
      setNewComment('')
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <Button onClick={handleOpen}>
        💬
        <span
          style={{ fontSize: '18px', marginLeft: '20px', color: 'black', marginRight: '10px', textTransform: 'capitalize' }}
          >
          view all {comments.length} comments
        </span>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        PaperProps={{style: {position: 'static'} }}
        >
        <div
          style={paperStyle}
        >
          <NewCommentForm
            comment={newComment}
            handleChange={handleChange}
            handleSubmit={submitNewComment}
            />
        </div>
        <Box sx={style}>
          <div style={{ marginTop: 70 }}>
            {
              comments.map(comm => (
                <div key={comm.id}>
                    <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ mt: 2 }} style={{ display: 'flex' }}>
                      <Avatar sx={{ bgcolor: 'greenyellow', marginRight: '10px' }}>{comm.user.user_name.split('')[0]}</Avatar>
                      <span style={{ marginTop: '5px' }}>{comm.user.user_name}</span>
                    </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 0, marginTop: '10px' }}>
                    {comm.content}
                  </Typography>
                </div>
              ))
            }
          </div>
        </Box>
      </Dialog>
  </div>
  );
}

const style = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, 0%)',
  width: 400,
  height: 500,
  overflow: "hidden",
  overflowY: "scroll",
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const paperStyle = {
  position: 'fixed',
  overflowY: 'auto',
  left: '50%',
  top: '20%',
  zIndex: 1,
  backgroundColor: 'white',
  transform: 'translate(-50%, 0%)',
  width: 463,
  borderRadius: 10
}


export default Comments