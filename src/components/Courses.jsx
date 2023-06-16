import { useEffect, useState } from "react";
import axios from "axios";

import { Grid, GridItem } from '@chakra-ui/react'
import Navbar from "./Navbar";
function Courses() {
  const[courses,setCourses]=useState([])
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

  
useEffect(()=>{
fetchdata()
},[])
  return (
    <div>

      <h1>Courses</h1>

      <Grid
        h='200px'
        templateRows='repeat(3, 1fr)'
        templateColumns='repeat(3, 1fr)'
        gap={4}
      >
        {courses.map((e) => (
          <GridItem rowSpan={1} colSpan={1} bg='tomato' >
            <h3>{e.subject}</h3>
            <h5>{e.Teacher}</h5>

          </GridItem>
        ))}


      </Grid>



    </div>
  );
}

export default Courses;