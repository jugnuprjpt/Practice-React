import React, { useState } from 'react'

function Example3() {
    const [user,setUser] = useState({name : "Jugnu" , Age: 30})
    const add=()=>{
       setUser({...user,Age:user.Age +5})
    }
  return (
    <>
    <div>
    <h1>Example  3</h1>
      <h3>Using Objects with useState Hook</h3>
      <p>Name : - {user?.name}</p>
      <p>Age : - {user.Age}</p>
      <button onClick={add}>Add Age</button>
    </div>
    <hr />
    
    </>
  )
}

export default Example3
