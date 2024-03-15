import React, { useState } from "react";

function Example2() {
  const [list, setList] = useState([
    "mango","orange",
    "papaita",
    "banana",
    "apple",
  ]);
  const handleAdd=()=>{
     let add = "grapes"
     setList((prev)=>[...prev,add])
  }
  return (
    <>
      <h1>Example 2 </h1>
      <h3>Using Arrays with useState Hook</h3>
      <div>
        <ul>
          {list?.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <button onClick={handleAdd}>Add fruit</button>
      </div>
    </>
  );
}

export default Example2;
