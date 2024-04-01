import React, { useState } from 'react'

function Increaseh1() {
    const [txt,setTxt] = useState('')
    const [add,setAdd] = useState('')

    const [fnt,setFnt] = useState("")

    const handleAdd=(type)=>{
      setFnt(type)
    } 

   
  return (
    <>
      <input type="text" value={txt} onChange={((e)=>setTxt(e.target.value))}/>
      <button onClick={()=>{setAdd(txt);setTxt("")}}>Add</button>
      <br />
      <span>
      
        {fnt === "h1" && <h1>{add}</h1>}
        {fnt === "h2" && <h2>{add}</h2>}
        {fnt === "h3" && <h3>{add}</h3>}
      
      {add}
       
        </span>
        <br />

      <button onClick={()=>handleAdd('h1')}>h1</button>
      <button onClick={()=>handleAdd('h2')}>h2</button>
      <button onClick={()=>handleAdd('h3')}>h3</button>
      <hr />
    </>
  )
}

export default Increaseh1
