import React, { useContext } from 'react'
import { AppContext } from './AuthContextProvider'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const Navigate=useNavigate()
    const {data,setdata,HandleFormRequest} =useContext(AppContext)
    
    if(data.isAuth){
      Navigate('/dashboard')
    }
    return (
        <div>
            <form data-testid = "auth_form"  onSubmit={HandleFormRequest}>
                <input
                    type = "email"
                    data-testid = "email"
                    placeholder = "Enter Email"
                    onChange={(e)=>{setdata({...data,email:e.target.value})}}
                />
                <br />
                <input
                    type = "password"
                    data-testid = "password"
                    placeholder = "Enter password"
                    onChange={(e)=>{setdata({...data,password:e.target.value})}}
                />
                <br />
                <input type = "submit"/>

            </form>                
        </div>
    )
}
