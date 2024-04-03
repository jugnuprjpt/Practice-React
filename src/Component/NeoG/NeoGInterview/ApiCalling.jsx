import React, { useEffect, useState } from 'react'

function ApiCalling() {

    const [list,setList] = useState([])
    
    console.log(list,"response.......")
    const userList = async()=>{
        const response = await fetch ('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        setList(data)
   

    }
    useEffect(()=>{
        userList();
    },[])
  return (
    <>
      <h1>Api calling </h1>
      {
       list.map((item)=>(
        <>
        <div>
            <tr><b>Name : - </b>{item.name}</tr>
            <tr><b>User Name : -</b> {item.username}</tr>
            <tr><b>Phone : - </b>{item.phone}</tr> 
            <tr><b>Email : - </b>{item.email}</tr> 
            <tr><b>Website : - </b>{item.website}</tr> <br />

             <span><b>Adress</b></span>
             <tr><b>city : - </b>{item.address.city}</tr>
             <tr><b>latitude : - </b>{item.address.geo.lat}</tr>
             <tr><b>logitude : - </b>{item.address.geo.lng}</tr>
             <tr><b>Street : - </b>{item.address.street}</tr>
             <tr><b>Suit : - </b>{item.address.suite}</tr> <br />
            {/* <tr><b>User Name : -</b> {item.username}</tr>
            <tr><b>Phone : - </b>{item.phone}</tr> 
            <tr><b>Email : - </b>{item.email}</tr> 
            <tr><b>Website : - </b>{item.website}</tr> <br /> */}

        </div>
        
     
        </>
       ))
      }
      <hr />
    </>
  )
}

export default ApiCalling
