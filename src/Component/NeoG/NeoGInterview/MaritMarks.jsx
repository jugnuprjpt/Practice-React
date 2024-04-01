import React, { useState } from 'react'
import marit from './maritData'

function MaritMarks() {
    const [marks,setMarks] = useState(marit)
    console.log(marks,"dasd")
  return (
    <>
     <table>
  <tr>
    <th colspan="2">Name</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
   
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
   
  </tr>
</table>
      <hr />
    </>
  )
}

export default MaritMarks
