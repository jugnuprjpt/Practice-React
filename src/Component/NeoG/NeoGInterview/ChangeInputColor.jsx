import React, { useState } from 'react'

function ChangeInputColor() {
    const [txt,setTxt] = useState('')
    const [data,setData] = useState('')

    const handleRed=(changeColor)=>{
        setData(changeColor)
     }
  return (
    <>
   
    <input type="text" style={{color:data}} value={txt} onChange={(e)=>setTxt(e.target.value)}/>
    <button onClick={()=>handleRed('red')}>Red</button>
    <button onClick={()=>handleRed('green')}>Green</button>
    <button onClick={()=>handleRed('blue')}>Blue</button>
  
    <hr />
    </>
  )
}

export default ChangeInputColor