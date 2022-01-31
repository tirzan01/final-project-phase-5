import React from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DayNutrientsDetails from "../day/dayNutrientsDetails";

const DisplaySinglePreviousDay = ({ day, date }) => {
  const [ids, setIds] = React.useState({})
  const [foods, setFoods] = React.useState([])

  React.useEffect(() => {
    arrangeMeals()
  }, [])

  const createData = (time, name, qty) => {
    return { time, name, qty };
  }

  const arrangeMeals = () => {
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
    setFoods(arrangedMeals)
  }

  return <div className="day-meals" style={{ marginTop: '50px', textTransform: "capitalize" }}>
    <h1 style={{ marginBottom: '20px' }}>{date}</h1>
    <h4 style={{ marginBottom: '20px' }}>{day.day_info.name}</h4>
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
          {foods.map((food, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {food.time}
              </TableCell>
              <TableCell align="left">{food.name}</TableCell>
              <TableCell align="right">{food.qty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
}

export default DisplaySinglePreviousDay