import React, { useEffect } from "react"
import DayNutrientsDetails from "../day/dayNutrientsDetails"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const DisplayDay = ({ day, removeFood }) => {
  const [ids, setIds] = React.useState({})
  const [foods, setFoods] = React.useState([])

  const retreiveIds = () => {
    const ids = {}
    //ids is an object with food id as a key and amount in grams as a value(e.g. 2: 200)
    for (const meals of day) {
      for (const food of meals.foods) {
        ids[food.foodId] ||= 0
        ids[food.foodId] += parseInt(food.qty)
      }
    }
    setIds(ids)
  }

  React.useEffect(() => {
    arrangeMeals()
  }, [day])

  const createData = (time, name, qty) => {
    return { time, name, qty };
  }

  const arrangeMeals = () => {
    const arrangedMeals = []
    const seenTime = []
    const ids = {}

    for (const meal of day) {
      console.log(meal)
      for (const food of meal.foods) {
        if (seenTime.includes(meal.time)) {
          const data = createData('', food.foodName, food.qty)
          arrangedMeals.push(data)
        } else {
          const data = createData(meal.time, food.foodName, food.qty)
           seenTime.push(meal.time)
           arrangedMeals.push(data)
          }
          ids[food.food_id] ||= 0
          ids[food.food_id] += parseInt(meal.qty)
      }
    }
    setIds(ids)
    setFoods(arrangedMeals)
  }

  useEffect(() => {
    retreiveIds()
  }, [day])

  return     <div className="day-meals">
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
            <TableCell align="right" onClick={() => removeFood(food.name, food.time)}>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</div>
}

export default DisplayDay