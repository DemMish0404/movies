import React, { useState } from 'react'
import './CheckBox.css'
import arrow from '../assets/arraow.svg'

function CheckBox({
  value, name, children
}) {
  const [val, setVal] = useState(true)
  return (
    <>
      <input className='agreeinput'
        checked={val} type="checkbox" value={value} id="agreeinput" />
      <label onClick={() => {
        setVal(prev => !prev)
      }} for='agreeinput"' className='label'> {children} </label>
    </>

  )
}

export default CheckBox