import React from "react"
import DayNutrientsDetails from "../day/dayNutrientsDetails"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DisplaySelectedDay from "./displaySelectedDay";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const btnStyle = {
  width: '100%',
  marginTop: 10,
}

const style = {
  marginBottom: 25,
  padding: 5
}

const DisplayDaySearch = ({ day, selectDay, dayId }) => {
  const [ids, setIds] = React.useState({})
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    retreiveIds()
  }, [])

  const selectNewDay = () => {
    fetch(`api/v1/selected_days`, {
      method: 'POST',
          headers:  {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          mode: 'cors',
          body: JSON.stringify({selected_day: {day_id: day.day_info.id}})
    })
      .then(selectDay(day.day_info.id))
      .catch(err => console.log(err))
  }

  const retreiveIds = () => {
    const ids = {}
    //ids is an object with food id as a key and amount in grams as a value(e.g. 2: 200)
      for (const meal of day.meals) {
        for (const food of meal.foods) {
          ids[food.food_id] ||= 0
          ids[food.food_id] += parseInt(food.qty)
        }
      }
    setIds(ids)
  }

  return <Paper
    style={style}
  >
    <TableContainer component={Paper}>
      <Table sx={{ width: 300 }} aria-label="caption table">
        <DayNutrientsDetails ids={ids} />
        <TableHead>
          <TableRow>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell align="right" width='75px'>Times used</TableCell>
            <TableCell align="right" width='15px'>Info</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={day.day_info.name}>
            <TableCell component="th" scope="row">
            <strong>{day.day_info.name}</strong>
            </TableCell>
            <TableCell align="right">{day.times_used}</TableCell>
            <TableCell component="th" scope="row">
              {/* <Button variant="outlined" >
                ?
              </Button> */}
              <IconButton aria-label="delete" onClick={handleClickOpen}>
              <InfoOutlinedIcon />
            </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    {
      parseInt(dayId) === parseInt(day.day_info.id)
      ?
      <Button variant="contained" onClick={selectNewDay} disabled style={btnStyle}>
        Currently Selected
      </Button>
      :
      <Button variant="contained" onClick={selectNewDay} style={btnStyle}>
        Select Day
      </Button>
    }
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {day.day_info.name}
        </DialogTitle>
        <DialogContent>
          <DisplaySelectedDay dayId={day.day_info.id} />
        </DialogContent>
      </Dialog>
  </Paper>
}

export default DisplayDaySearch