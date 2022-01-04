import React from "react"

const Sex = () => {
  return <React.Fragment>
    <label className='form-label'>Sex:</label>
    <input type='radio' name='sex' value='male' className='sex-input'/>
    <label className='sex-label' htmlFor="male">male ♂</label>

    <input type='radio' name='sex' value='female' className='sex-input'/>
    <label className='sex-label' htmlFor="female">female ♀</label>

    <input type='radio' name='sex' value='rather-not-say' className='sex-input'/>
    <label className='sex-label' htmlFor="rather-not-say">rather not say ⚤</label>
  </React.Fragment>
}

export default Sex