import React, { useState } from 'react'

function IncreaseFontSize() {
    const [data,setData] = useState("")
    const [textInce,setTextInce] = useState("")

    const [fntsize,setFntsize] = useState(18)
    

  return (
    <>
    <div>
        <input type="text" value={data} onChange={((e)=>setData(e.target.value))}/>
        <button onClick={()=>setTextInce(data)}>Add</button>
       
        
    </div>
    <div>
    <span>Font Size:-</span>
    <span style={{ fontSize: `${fntsize}px` }}>{textInce}</span>
    <button onClick={(()=>setFntsize(fntsize+2))}>+</button>
    <button onClick={(()=>setFntsize(fntsize-2))}>-</button>
     
    </div>
    <hr />
    </>
  )
}

export default IncreaseFontSize