import React, { createContext, useState } from 'react'
import axios from 'axios'
export const AppContext = createContext()

export default function AuthContextProvider({ children }) {
  const [data2, setdata2] = useState([])
  const [data, setdata] = useState({
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
        9754601089,
      town
        :
        "",
      image: ""
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