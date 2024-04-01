import React, { useState } from 'react'

function Example4() {
    let userData = {
        name :"Rekha",
        Age : 28

    }
    const [userName,setUserName] = useState(userData)
  
    const add= ()=>{
    // setUserName({...userName,name: "Pihu",Age:userData.Age -21})
    // setUserName((prev)=>({...prev,name: "Pihu",Age:userData.Age -21}))
    setUserName((prev)=>{
      return {...prev,name: "Pihu",Age:userData.Age -21}
    })
    
    }
  return (
    <>
    <div>
        <h1>Example 4 :- </h1>
        <h3>Using Objects with useState Hook</h3>
        <p>{userName?.name}</p>
        <p>{userName?.Age}</p>
        <button onClick={add}>Add </button>

    </div>
    </>
  )
}

export default Example4