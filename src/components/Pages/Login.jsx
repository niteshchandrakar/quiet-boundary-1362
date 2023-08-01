import React, { useContext } from 'react'
import { AppContext } from './AuthContextProvider'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
export default function Login() {
  const Navigate=useNavigate()
  const toast = useToast()
    const {data,setdata,HandleFormRequest} =useContext(AppContext)
    
    if(data.isAuth){
        alert("Login Succesfull")
      Navigate('/dashboard')
  
      
    }
    return (
        <div className='maindivv'>
            <form   onSubmit={HandleFormRequest}>
            
                <input
                style={{marginTop:"20px",marginBottom:"10px"}}
                    type = "email"
                    
                    data-testid = "email"
                    placeholder = "abc@gmail.com"
                    onChange={(e)=>{setdata({...data,email:e.target.value})}}
                />
                <br />
                <input
                style={{marginBottom:"10px"}}
                    type = "password"
                    
                    placeholder = "12345"
                    onChange={(e)=>{setdata({...data,password:e.target.value})}}
                />
                <br />
                <input className="button" type = "submit" />


            </form>  
                          
        </div>
    )
}
