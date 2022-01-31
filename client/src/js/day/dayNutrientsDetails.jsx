import React from "react"

const DayNutrientsDetails = ({ ids }) => {
  const[nutrients, setNutrients] = React.useState({
    cal: 0,
    fib: 0,
    sug: 0,
    prt: 0,
    fat: 0,
    crb: 0
  })

  const calculateSingleNutrient = async () => {
    let newNutrients = { cal: 0,fib: 0,sug: 0,prt: 0,fat: 0,crb: 0 }

      for (const id in ids) {
      const resp = await fetch(`http://localhost:4000/api/v1/foods/${id}`)
      const food = await resp.json()
        newNutrients = {
          //ids is an object with food id as a key and amount in grams as a value(e.g. 2: 200)
          cal: handleCalculations(food.calories, parseFloat(newNutrients.cal), ids[id]),
          fib: handleCalculations(food.fibres, parseFloat(newNutrients.fib), ids[id]),
          sug: handleCalculations(food.sugars, parseFloat(newNutrients.sug), ids[id]),
          prt: handleCalculations(food.proteins, parseFloat(newNutrients.prt), ids[id]),
          fat: handleCalculations(food.fats, parseFloat(newNutrients.fat), ids[id]),
          crb: handleCalculations(food.carbs, parseFloat(newNutrients.crb), ids[id]),
        }
      }
      setNutrients(newNutrients)
  }

  const handleCalculations = (acc, curr, qty) => {
    return ((acc * qty / 100) + curr).toFixed(2)
  }

  React.useEffect(calculateSingleNutrient, [ids])

  return <caption>
    {
      ids
      ?
      `Calories: ${nutrients.cal} cal | Proteins: ${nutrients.prt} g | Fats: ${nutrients.fat} g | Carbs: ${nutrients.crb} g`
      :
      'No day selected'
    }
  </caption>
}

export default DayNutrientsDetails