import { useEffect, useState } from "react";
import axios from "axios";
function Signup() {
    const [data,setData]=useState({email:"",password:""})
    
    
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
    }
  
  
    console.log(data)
    return (
      <div>
        <h1>Signup</h1>
       <form onSubmit={handleformsubmit} >
        <input type="email" onChange={(e)=>{setData({...data,email:e.target.value})}} />
        <input type="password" onChange={(e)=>{setData({...data,password:e.target.value})}} />
        <input type="submit" />
       </form>
      </div>
    );
  }
  
  export default Signup;