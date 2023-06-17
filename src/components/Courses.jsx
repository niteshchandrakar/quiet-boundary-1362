import { useEffect, useState } from "react";
import axios from "axios";

import { Grid, GridItem } from '@chakra-ui/react'
import Navbar from "./Navbar";
function Courses() {
  const [courses, setCourses] = useState([])
  const fetchdata = async (e) => {

    await axios.get('http://localhost:8080/courses')
      .then(function (response) {
        // handle success

        setCourses(response.data);


      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })


  }


  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <div>

      <h1>Courses</h1>

      {courses.map((e) => (
        <div style={{boxShadow:" rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",width:"50%"}}>
          <img width={200} src={e.image} alt="" />
          <h3>{e.subject}</h3>
          <h5>{e.Teacher}</h5>
        </div>



      ))}



    </div>
  );
}

export default Courses;