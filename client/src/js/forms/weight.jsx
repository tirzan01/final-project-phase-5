import React from "react"

const Weight = ({ type }) => {
  const [unit, setUnit] = React.useState('kg')

  const types = {
    current: 'Current Weight',
    goal: 'Goal weight'
  }

  return <React.Fragment>
    <label htmlFor="weight" className='form-label'>{types[type]}:</label>
    <input
      type='text'
      name='number'
      className="input-form number"
      placeholder={unit === 'kg' ? 86 : 190}
    />
    <select
      name="weight"
      id="wight-choice"
      className='unit-choice'
      value={unit}
      onChange={e => setUnit(e.target.value)}
    >
      <option value='kg'>Kg</option>
      <option value='lb'>lb</option>
    </select>
  </React.Fragment>
}

export default Weight

//avg weight: 86kg / 190lb
//fit weight: 77kg / 170lb