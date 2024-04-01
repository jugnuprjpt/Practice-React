import React, { useState } from 'react'

function TypeInputField() {
    const [user,setUser] = useState()
    
    // const add=(data)=>{
    //     setUser(data)
    // }
  return (
    <>
    <div>
        <h1>Type Input field</h1>
    <input type="text" onChange={(e)=>setUser(e.target.value)} value={user}/>
    <span>{user}</span>
    </div>
    <hr />
   </>
  )
}

export default TypeInputField