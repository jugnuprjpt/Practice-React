import React, { useState } from 'react'

function Example1() {
    const [counter,setCounter] = useState(0)
    const increment = () =>{
        setCounter(counter + 1 )
    }
    const decrement = () =>{
        if (counter === 0 ){
            setCounter(counter)

        }else {
            setCounter(counter -1 )
        }
        
    }
  return (
    <>
    <div>
    <h1>Example 1 </h1>
     <span>counter : {counter}</span> <br />    
     <button onClick={increment}>increment</button>
     <button onClick={decrement}>Decrement</button>
    </div>
    <hr />
  
    </> 
  )
}

export default Example1