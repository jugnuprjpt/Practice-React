import React, { useState } from 'react'

function ToDoList() {
    const [data,setData] = useState([])
    const [textValue,setTextValue] = useState("")

    const handleSubmit=()=>{
          if (textValue.trim()){
            // setData([...data,textValue])
            setData((prev)=>([...prev,textValue]))
            setTextValue("")
          }
    }

    const handleDelete=(dataGet)=>{
        setData(data.filter((itemDelete)=>itemDelete !== dataGet))
    }
  return (
    <>
    <div>
    <h1>ToDoList</h1>
    <div>
        <input type="text" value={textValue} onChange={(e)=>setTextValue(e.target.value)}/>
        <button type='submit' onClick={handleSubmit}>Add</button>
    </div>
    <div>
      {data.map((item,id)=>
      <>
      <span>{item}</span>
      <button onClick={()=>handleDelete(item)}>Delete</button>
   <br />
      </>)}
    </div>
    </div>
    <hr />

    </>
  )
}

export default ToDoList