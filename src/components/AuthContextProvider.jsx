import React, { createContext, useState } from 'react'
import axios from 'axios'
export const AppContext = createContext()

export default function AuthContextProvider({ children }) {
  const [data2, setdata2] = useState([])
  const [data, setdata] = useState({
    isAuth: true,
    email: ""
    , password: "",
    userdata: {
      class
        :
        "11th Class",
  dob
        :
        "07-09-1999",
  email
        :
        "abc@gmail.com",
  firstname
        :
        "Nitesh",
  gender
        :
        "male",
  id
        :
        1,
  lastname
        :
        "Chandrakar",
  password
        :
        "12345",
  phone
        :
        9754601089,
  town
        :
        "Mathani Khurd"
    }
  })

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



  return (
    <div>
      <AppContext.Provider
        value={{ data, setdata, HandleFormRequest }}
      >{children}</AppContext.Provider>
    </div>
  )



}