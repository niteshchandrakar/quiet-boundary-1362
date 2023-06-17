import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Center } from "@chakra-ui/react";
import { isDisabled } from "@testing-library/user-event/dist/utils";
function Teachers() {
  const[follow,setFollow]=useState(true)
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
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",width:"95%",height:"100%",marginLeft:"2%"}}>

      
      {teachers.map((e) => (
        <div style={{boxShadow:" rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",margin:"10px",paddingLeft:"15%",paddingRight:"10%",alignContent:"center"}}>
          
          
          <img style={{width:"200px",height:"200px"}} src={e.image} alt="" />
          <h1>{e.name}</h1>
          <p>{e.description}</p>
          <p>WatchTime: {e.watchtime} Minutes</p>
          <p>Followers: {e.followers} <button onClick={()=>{setFollow(!follow)}}>Follow</button></p>
        
        </div>
      ))}
    </div>
  );
}

export default Teachers;