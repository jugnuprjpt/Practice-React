import React, { useState } from 'react'

function AddNumber() {
  const [evenOdd,setEvenOdd] = useState('')
  const [number,setNumber] = useState("")

    const handleChange=(e)=>{
      setEvenOdd(e.target.value) 
      setNumber(evenOdd % 2 == 0)
    }

  return (
    <>
   <h3>Write a program to take a number input from user and determine whether the number is odd or even.</h3>
   <input type="number" value={evenOdd} onChange={handleChange}/>
   <h5>The number is odd OR Even:- {number == true ? "odd" : "even"}</h5>
   <hr />
    </>
  )
}

export default AddNumber