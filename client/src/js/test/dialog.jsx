// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// const comm = ['xcswxcdscx', 'cdscscsd', '<<<<<<<<<<<<<', 'xcswxcdscx', 'cdscscsd', '<<<<<<<<<<<<<','xcswxcdscx', 'cdscscsd', '<<<<<<<<<<<<<', 'xcswxcdscx', 'cdscscsd', '<<<<<<<<<<<<<','xcswxcdscx', 'cdscscsd', '<<<<<<<<<<<<<', 'xcswxcdscx', 'cdscscsd', '<<<<<<<<<<<<<','xcswxcdscx', 'cdscscsd', '<<<<<<<<<<<<<', 'xcswxcdscx', 'cdscscsd', '<<<<<<<<<<<<<']

// export default function FormDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div className='main'>
//       <button variant="outlined" onClick={handleClickOpen}>
//         Open form dialog
//       </button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         sx={{ bgcolor: 'grey.900' }}
//         variant="rectangular"
//         width={210}
//         height={118}
//       >
//         <DialogTitle>Subscribe</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             {
//               comm.map(c => <h1>{c}</h1>)
//             }
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Reply"
//             type="reply"
//             style={{backgroundColor: 'white'}}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleClose}>Subscribe</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }