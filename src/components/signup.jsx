import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {

  
    const [data,setData]=useState({email:"",password:"",
  firstname:"",lastname:"",dob:"",phone:"",gender:"",town:"",
  class:"",image:""
  
  })
    const navigate=useNavigate()
    
    const handleformsubmit=(e)=>{
      e.preventDefault()
      axios.post(`http://localhost:8080/userdata`, {
        ...data
        })
        .then(function (response) {
        console.log(response);
        
        })
        .catch(function (error) {
        console.log(error);
        });
        navigate('/login')
    }
  
  
    console.log(data)
    return (
      <div className="maindivv" style={{}}>
        <h1>Signup</h1>
       <form onSubmit={handleformsubmit} >
        <input type="email" placeholder="Enter email" onChange={(e)=>{setData({...data,email:e.target.value})}} />
        <br />
        <input type="password" placeholder="Create password" onChange={(e)=>{setData({...data,password:e.target.value})}} />
        <br />
        <input type="text" placeholder="Firstname" onChange={(e)=>{setData({...data,firstname:e.target.value})}} />
        <br />
        <input type="text" placeholder="Lastname" onChange={(e)=>{setData({...data,lastname:e.target.value})}} />
        <br />
        <input type="date" placeholder="Lastname" onChange={(e)=>{setData({...data,dob:e.target.value})}} />
        <br />
        <input type="number" placeholder="Phone number" onChange={(e)=>{setData({...data,phone:e.target.value})}} />
        <br />
        <input type="text" placeholder="Town" onChange={(e)=>{setData({...data,town:e.target.value})}} />
        <br />
        <input type="text" placeholder="Class example-11th Grade" onChange={(e)=>{setData({...data,class:e.target.value})}} />
        <br />
        <input type="text" placeholder="Image Link" onChange={(e)=>{setData({...data,image:e.target.value})}} />
        <br />
        <select onChange={(e)=>{setData({...data,gender:e.target.value})}} >
         <option value="male">Male</option>
         <option value="female">Female</option>
         <option value="Other">Other</option>
        </select>
        <br />
        <input type="submit" />
       </form>
      </div>
    );
  }
  
  export default Signup;