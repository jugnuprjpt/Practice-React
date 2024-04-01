import React, { useState } from 'react'

function Form() {
    let formData={
        firstName :"",
        lastName :"",
        email:""
    }
    const [data,setData] = useState(formData)
    const [submitData,setSubmitData] = useState({})
    
   const handleInputChange=(e)=>{
    // const { name, value } = e.target;
    // setData({ ...data, [name]: value });

    setData((prev)=>({...prev,[e.target.name]:e.target.value}))

    console.log(e.target,e.target.name,e.target.value,"....")

   }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setSubmitData(data)
        setData(formData)
        console.log(data,"........");
    }
    
  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">First Name</label>
                <input type="text" name = "firstName" value={data.firstName} onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="">Last Name</label>
                <input type="text" name = "lastName" value={data.lastName} onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" name = "email" value={data.email}onChange={handleInputChange}/>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
           
       
        </form>
     
     <div>
        <span>{submitData?.firstName}</span>
     </div>
    </div>
    <hr />
    </>
  )
}

export default Form