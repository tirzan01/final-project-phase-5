import React from "react"
import DayNutrientsDetails from "../day/dayNutrientsDetails"
import Comments from "./comments"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

const DisplaySingleDay = ({ day, userId }) => {
  const { day_info, meals, user_name, likes } = day

  const [ids, setIds] = React.useState({})
  const [foods, setFoods] = React.useState([])
  const [toggleLike, settoggleLike] = React.useState(likes)

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

    for (const meal of meals) {
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

  const like = () => {
    console.log('like')
    fetch('http://localhost:4000/api/v1/likes', {
      method: 'POST',
      headers:  {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      mode: 'cors',
      body: JSON.stringify({like: {day_id: day_info.id, user_id: userId}})
    })
      .then(() => {
      settoggleLike({  liked: true, count: toggleLike.count + 1 })
      })
      .catch(err => console.log(err))
  }

  const dislike = () => {
    console.log('Dislike')
    fetch('http://localhost:4000/api/v1/dislike', {
      method: 'DELETE',
      headers:  {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      mode: 'cors',
      body: JSON.stringify({like: {day_id: day_info.id, user_id: userId}})
    })
      .then(() => {
      settoggleLike({  liked: false, count: toggleLike.count - 1 })
      })
      .catch(err => console.log(err))
  }

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });

  return <div>
    <div className="user-name" style={{ textTransform: 'capitalize', display: 'flex', marginTop: '20px' }}>
      <Avatar sx={{ bgcolor: 'greenyellow', marginRight: '10px', height: '70px', width: '70px', fontSize: '50px' }}>
        {user_name.split('')[0]}
      </Avatar> {user_name}
    </div>
    <div className="day-name" style={{ textTransform: 'capitalize', margin: '20px', fontSize: '30px' }}>
      {day_info.name}
    </div>
    <div className="day-meals">
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
    <div style={{ display: 'flex' }}>
      <Box
        sx={{
          '& > legend': { mt: 2 },
          marginTop: '10px'
        }}
      >
      <StyledRating
        name="customized-color"
        defaultValue={toggleLike.liked ? 1 : 0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={1}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        max={1}
        onClick={toggleLike.liked ? dislike : like}
      />
        <span style={{ fontSize: '18px', marginLeft: '18px' }}>Liked By {toggleLike.count} People</span>
      <Comments dayId={day_info.id} userId={userId} />
    </Box>
    </div>
  </div>
}

export default DisplaySingleDay
