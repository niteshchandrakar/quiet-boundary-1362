import React, { useContext,useState } from 'react'
import { AppContext } from './AuthContextProvider'
import { useNavigate } from 'react-router-dom'


export default function AdminLogin() {
  const Navigate=useNavigate()
    const[data,setdata]=useState({email:"",password:""})
    console.log(data)
const handlesubmit=()=>{
    if(data.email=="nkc@gmail.com" && data.password=="12345"){
        Navigate("/postcourses")
      }else{
        alert("Invalid Credentials")
      }
}

  
    return (
        <div className='maindivv'>
            <form onSubmit={handlesubmit}  >
            
                <input
                style={{marginTop:"20px",marginBottom:"10px"}}
                    type = "email"
                    data-testid = "email"
                    placeholder = "Enter Email"
                    onChange={(e)=>{setdata({...data,email:e.target.value})}}
                />
                <br />
                <input
                style={{marginBottom:"10px"}}
                    type = "password"
                    
                    placeholder = "Enter password"
                    onChange={(e)=>{setdata({...data,password:e.target.value})}}
                />
                <br />
                <input className="button" type = "submit"/>

            </form>                
        </div>
    )
}