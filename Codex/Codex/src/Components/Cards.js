import React, { useEffect, useState } from 'react'

const Cards = () => {

  const[task,setTask]=useState([])


 useEffect(()=>{
  const getTask=async()=>{
    try {
      const response = await fetch("http://localhost:5000/api/v1/task/all", {
        method: "GET", 
        headers: {
          mode: 'no-cors',
          "Content-Type": "application/json",
        },
        
      });
      const jsondata=await response.json();
      console.log(jsondata.tasks);
      setTask(jsondata.tasks);
    } catch (error) {
      console.log(error)
    }
  }
  getTask();
  
 },[task]);
   

 const deleteItem=async(id)=>{
      try {
        const response = await fetch(`http://localhost:5000/api/v1/task//delete/${id}`, {
          method: "DELETE", 
          headers: {
            "Content-Type": "application/json",
          },
          
        });
         const jsondata=response.json();
      } catch (error) {
        console.log(error)
      }
 }

  return (
    <>
    {task.map((ele)=>{
      return(
       <div style={{"width": "23rem",'position': 'relative',"top":"10pc","left":"30pc"}}>
       <div class="card" style={{"width": "18rem;"}}>
   <div class="card-body">
     <h5 class="card-title">{ele.title}</h5>
     <p class="card-text">{ele.para}</p>
     <button onClick={()=>{deleteItem(ele._id)}}>Delete</button>
   </div>
 </div>
     </div>)
    })}
   
    </>
    
    
  )
}

export default Cards
