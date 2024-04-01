import React, { useState } from 'react'

function ToggleSwitch() {
    const [on,setOn] = useState(false)
  return (
    <>
   <p>Switch is {on ? "ON" : "OFF"}</p>
    <button onClick={()=>setOn(!on)}>Switch</button>
    <hr />
    </>
  )
}

export default ToggleSwitch