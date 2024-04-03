import React, { useState } from 'react'

function LoadingBtn() {
    const [show,setShow]=useState(true)

  return (
    <>
     <button onClick={()=>setShow(!show)}>Loading</button>
     <br />
     {
        show && <span>Loading...........</span> 
     }
     
    <hr />
    </>
  )
}

export default LoadingBtn