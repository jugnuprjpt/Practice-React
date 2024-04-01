import React, { useState } from 'react'

function CharacterCount() {
    const [text,setText] = useState("")

  return (
    <>
    <div>
    <h1>Character Counter</h1>
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
    <br />
    <span>Number of text : - {text.trim().length}</span> 
    </div>
   <hr />
    </>
  )
}

export default CharacterCount
