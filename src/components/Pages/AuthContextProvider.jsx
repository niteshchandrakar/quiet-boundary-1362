import React, { createContext, useState } from 'react'
import axios from 'axios'
export const AppContext = createContext()
const initstate={
  isAuth: false,
  email: ""
  , password: "",
  userdata: {
    class
      :
      "",
    dob
      :
      "",
    email
      :
      "",
    firstname
      :
      "",
    gender
      :
      "",
    id
      :
      1,
    lastname
      :
      "",
    password
      :
      "",
    phone
      :
      "",
    town
      :
      "",
    image: "data:image/png;base64,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"
  }

}
export default function AuthContextProvider({ children }) {
  const [data2, setdata2] = useState([])
  const [data, setdata] = useState(initstate)
 console.log(data)
  const HandleFormRequest = async (e) => {
    e.preventDefault()
    await axios.get('http://localhost:8080/userdata')
      .then(function (response) {
        // handle success

        setdata2(response.data);

        data2.map((e) => {
          if (e.email == data.email && e.password == data.password) {
           
            setdata({ ...data, isAuth: true, userdata: e })
          }
        })
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      })



  }

const logout=()=>{
  setdata(initstate)
}

  return (
    <div>
      <AppContext.Provider
        value={{ data,logout, setdata, HandleFormRequest }}
      >{children}</AppContext.Provider>
    </div>
  )



}