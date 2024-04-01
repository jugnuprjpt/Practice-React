import React, { useState } from 'react'

function SearchFilter() {
  const items = [
    "apple",
    "banana",
    "mango",
    "cherry",
    "orange",
    "grapes",
    "coconut",
    "watermelon"

  ]
  const [search,setSearch] = useState("")

  const filteredItems = items.filter(itemData =>
    itemData.toLowerCase().includes(search.toLowerCase())
  );
 
  const handleChange=(e)=>{
    setSearch(e.target.value)
  }

  return (
    <>
   <h1>Search Filter</h1> 
    <div>
        <input type="text" value = {search} onChange={handleChange}/>
    </div>
    <div>
      {
        filteredItems.map((data,i)=>(
          <div key={i}>
         <ul >
          <li>{data}</li>
         </ul>
          </div>
        ))
      }
    </div>
    <hr />
    </>
  )
}

export default SearchFilter