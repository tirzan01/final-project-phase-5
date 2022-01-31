import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DayNutrientsDetails from '../day/dayNutrientsDetails';

const DisplaySelectedDay = ({ dayId }) => {
  const [meals, setMeals] = React.useState([])
  const [ids, setIds] = React.useState([])

  const createData = (time, name, qty) => {
    return { time, name, qty };
  }

  const arrangeMeals = day => {
    const arrangedMeals = []
    const seenTime = []
    const ids = {}

    for (const meal of day.meals) {
      if(seenTime.includes(meal.time)) {
        const data = createData('', meal.food_name, meal.qty)
        arrangedMeals.push(data)
      } else {
        const data = createData(meal.time, meal.food_name, meal.qty)
        seenTime.push(meal.time)
        arrangedMeals.push(data)
      }
      ids[meal.food_id] ||= 0
      ids[meal.food_id] += parseInt(meal.qty)
    }
    setIds(ids)
    return arrangedMeals
  }

  React.useEffect(() => {
    if(dayId === null) {
      setMeals([])
      setIds(null)
    } else {
      fetch(`api/v1/days/${dayId}`)
        .then(resp => resp.json())
        .then(day => {
          setMeals(arrangeMeals(day))
        })
    }
  }, [dayId])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 600 }} aria-label="caption table">
        <DayNutrientsDetails ids={ids} />
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell align="left" width='250px'>Name</TableCell>
            <TableCell align="right">Quantity (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meals.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.time}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DisplaySelectedDay