import React, { useState } from 'react'

function ToggleButton() {
    const [show,setShow] = useState(false)
    const toggle=()=>{
        setShow(!show)
    }
  return (
    <>
      <h1>Toggle Visibility</h1>
      <button onClick={toggle}>Toggle</button>
      {show ?  <h1>Toggle me</h1> : ""}
     <hr />
    </>
  )
}

export default ToggleButton
