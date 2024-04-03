import React, { useState } from "react";
import marit from "./maritData";

function MaritMarks() {
  const [marks, setMarks] = useState(marit);
  console.log(marks, "dasd");
  return (
    <>
      <div style={{ display: "flex" }}>
        {marks.map((item) => (
          <table>
            <tr>
              <th colspan="2">{item?.name}</th>
            </tr>
            <tr>
              <td>Unit Test</td>
              <td>Pre Marks</td>
            </tr>
            {
              Object.entries(item.unitTestMarks[0]).map(([subject,marks])=>(
                <>
                
                 <tr >
              {/* <td>{subject}</td> */}
              <td>{marks}</td>
            </tr>
                </>
              ))
            }
            
          
          
          </table>
        ))}
      </div>

      <hr />
    </>
  );
}

export default MaritMarks;
