import React, { useState } from 'react'

function Calculation() {
    const [textInput,setTextInput] = useState("")
    const [textInputb,setTextInputb] = useState("")

    const [valueGet, setValueGet] = useState("")

    const handelChange=(e)=>{
        setTextInput(e.target.value)
        
    }
    
    const handelChangeb=(e)=>{
        setTextInputb( e.target.value)
        
    }
   
  return (
    <div>
     <input type="number" value={textInput} onChange={handelChange}/> &nbsp; &nbsp;
     <input type="number" value={textInputb} onChange={handelChangeb}/>
     <div style={{padding:"5px" , margin:"10px"}}>
        <button onClick={()=>{setValueGet((Number(textInput) + Number(textInputb)));setTextInput("");setTextInputb("")}}>+</button>
        <button onClick={()=>{setValueGet(textInput - textInputb );setTextInput("");setTextInputb("")}}>-</button>
        <button onClick={()=>{setValueGet(textInput / textInputb );setTextInput("");setTextInputb("")}}>/</button>
        <button onClick={()=>{setValueGet(textInput * textInputb );setTextInput("");setTextInputb("")}}>X</button>
     </div>
     <span>output :- {valueGet}</span>
     <hr />
    </div>
    
  )
}

export default Calculation
