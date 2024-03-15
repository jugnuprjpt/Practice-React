import React, { useEffect, useState } from 'react'

function Navbar() {
    const [showName,setShowName] = useState("Pihu")
    const [count ,setCount] = useState(0)

    console.log("Before Effect")
    useEffect(()=>{
        alert("chall")
    console.log("effect")
    // setShowName(`jugnu${count}`)
    setCount(count+1)

    // ---- cleanup function ------

  //  return ()=>{
  //   console.log("it will run before leaving componenet or before unmounting")
  // alert("clean up")
  //  }
    },[showName])
    console.log("After effect")

  return ( 
    <>
    <button onClick={()=>setShowName("arjun")}>Login</button>
    <h1>{showName}</h1>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>count</button>

    </>
  )
}

export default Navbar