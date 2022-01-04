import React from "react"

const Height = () => {
  const [unit, setUnit] = React.useState('cm')

  return <React.Fragment>
    <label htmlFor="height" className='form-label'>Height:</label>
    <input
      type='number'
      name='height'
      className="input-form number"
      placeholder={unit === 'cm' ? 174 : 68.5}
    />
    <select
      name="height"
      id="height-choice"
      className='unit-choice'
      value={unit}
      onChange={e => setUnit(e.target.value)}
    >
      <option value='cm'>cm</option>
      <option value='in'>In</option>
    </select>
  </React.Fragment>
}

export default Height

//avg male height: 174cm / 68.5In