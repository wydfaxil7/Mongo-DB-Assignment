import React, { useEffect, useState } from 'react'
import Cards from './Cards'

const Input = (props) => {
 
  let[input,setInput]=useState({title:"",para:""});


  const add=async(title,para)=>{
    try {
      const response = await fetch('http://localhost:5000/api/v1/task/add', {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify({title,para}), 
      });
  
    } catch (error) {
      console.log(error);
    }
   
  }
  const handleclick=async()=>{
   add(input.title,input.para);
   setInput({title:"",para:""})
  }

  const onchange=(e)=>{
    setInput({...input,[e.target.name]: e.target.value});
  }

  return (
    <div>
  <div>
  <input style={{"width": "23rem",'position': 'relative',"top":"10pc","left":"30pc"}} value={input.title} onChange={onchange} name='title' type="text" className="form-control" placeholder="Enter title" aria-label="Username" aria-describedby="addon-wrapping"/>
  <input style={{"width": "23rem",'position': 'relative',"top":"10pc","left":"30pc"}} value={input.para} onChange={onchange} name='para' type="text" className="form-control"  aria-label="Username" aria-describedby="addon-wrapping"/>
   <button onClick={handleclick} style={{"width": "5rem",'position': 'relative',"top":"10pc","left":"30pc"}}>Submit</button>
</div>


<Cards/>


    </div>
  )
}

export default Input
