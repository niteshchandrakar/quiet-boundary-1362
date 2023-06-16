import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
function Teachers() {
  const[teachers,setTeachers]=useState([])
  const fetchdata = async (e) => {
   
    await axios.get('http://localhost:8080/teachers')
      .then(function (response) {
        // handle success

        setTeachers(response.data);
        

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
useEffect(()=>{
  fetchdata()
  },[])

  return (
    <div>

      <h1>teachers</h1>
      {teachers.map((e) => (
        <h1>{e.name}</h1>
      ))}
    </div>
  );
}

export default Teachers;