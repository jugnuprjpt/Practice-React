import React, { useState } from "react"

function Counter (){

    const [number,setNumber] = useState(0)
    const counterNumber=()=>{
        setNumber(number+1)
        setNumber((prev)=>prev+1)
     
    }
    return (
        <>
        <h1>Counter</h1>
        <p>Counter:- {number}</p>
        <button onClick={()=>{counterNumber();counterNumber();counterNumber()}}>Increment</button>
        <hr />
        </>
    )

}

export default Counter