import React, { useState } from 'react'

function MaxMiniNumber() {
 
    const [findNumber,setFindNumber] = useState('')
    const [number,setNumber] = useState("")
    console.log(number,"number....")

    
   
    const num1 = 129
    const num2 = 251

    const minimumNumber = Math.min(num1)
    const maximumNumber = Math.max(num2)
    console.log(maximumNumber,"........")

    const handleChange=(e)=>{
      setFindNumber(e.target.value)
        setNumber(minimumNumber)
        setNumber(maximumNumber)

    }
  return (
    <>
    <h3>Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and nu
        m2=251.</h3>
        <input type="number" value={findNumber} onChange={handleChange}/>
        <h5>The number is:- {number ? "Minimum Number" :"Maximum Number"}</h5>
        <hr />
    
    </>
  )
}

export default MaxMiniNumber

