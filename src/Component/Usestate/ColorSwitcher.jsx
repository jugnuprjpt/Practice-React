import React, { useState } from 'react'

function ColorSwitcher() {
  const [color,setColor] = useState("")


  return (
    <>
     <h1>Color Switcher</h1>
     <div>
        <select name="" id="" onChange={(e)=>setColor(e.target.value)}>
            <option value="">Select Color</option>
            <option value="green">Green</option>
            <option value="yellow">Yelllow</option>
            <option value="orange">Orange</option>
            <option value="grey">Greay</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="brown">Brown</option>
            <option value="purple">Purple</option>
        </select>
     </div>
     <div style={{background:color,height:"200px ", padding:"20px"}}>change backghround</div>
     <hr />
    </>
  )
}

export default ColorSwitcher
