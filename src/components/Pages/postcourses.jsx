import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Postcourses() {

  
    const [data,setData]=useState({subject:"",Teacher:"",image:"",
    description:"",type:"",Fee:"",start:"",class:""
  
  })
    const navigate=useNavigate()
    
    const handleformsubmit=(e)=>{
      e.preventDefault()
      axios.post(`http://localhost:8080/courses`, {
        ...data
        })
        .then(function (response) {
        console.log(response);
        alert("Course Added Successfully")
        })
        .catch(function (error) {
        console.log(error);
        });
        // navigate('/login')
    }
  
  
    console.log(data)
    return (
      <div className="maindivv" style={{}}>
        <h1>Add Courses</h1>
       <form onSubmit={handleformsubmit} >
        
       <select className="button" onChange={(e)=>{setData({...data,subject:e.target.value})}} >
         <option value="">Subject</option>
         <option value="English">English</option>
         <option value="Chemistry">Chemistry</option>
         <option value="Maths">Maths</option>
         <option value="Physics">Physics</option>
         
        </select>
        <br />
        <input type="text" placeholder="Teacher" onChange={(e)=>{setData({...data,Teacher:e.target.value})}} />
        <br />
        <input className="button" type="date" placeholder="Teacher" onChange={(e)=>{setData({...data,start:e.target.value})}} />
        <br />
       
        <input type="number" placeholder="Fees" onChange={(e)=>{setData({...data,Fee:e.target.value})}} />
        <br />
        <input type="text" placeholder="Desription" onChange={(e)=>{setData({...data,description:e.target.value})}} />
        <br />
       
        <input type="text" placeholder="Teacher Image" onChange={(e)=>{setData({...data,image:e.target.value})}} />
        <br />
        <select className="button" onChange={(e)=>{setData({...data,type:e.target.value})}} >
         <option value="">Type</option>
         <option value="Live">Live</option>
         <option value="Recorder">Recorded</option>
        </select>
        <select className="button" onChange={(e)=>{setData({...data,class:e.target.value})}} >
         <option value="">Class</option>
         <option value="9th Class">Class 9</option>
         <option value="10th Class">Class 10</option>
         <option value="11th Class">Class 11</option>
         <option value="12th Class">Class 12</option>
         
         
        </select>
        <br />
        <input className="button" type="submit" />
       </form>
      </div>
    );
  }
  
  export default Postcourses;