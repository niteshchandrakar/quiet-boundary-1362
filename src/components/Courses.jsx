import Navbar from "./Navbar";
import { Flex, Spacer } from '@chakra-ui/react'
import { Box  } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Square } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
function Courses() {

  const courses = [
    {
      subject: "Physics",
      Teacher: "Nitesh Chandrakar",
      image: "random",
      description: "Detailes Course on Moving charges & Magnetism CBSE Class 12 Boards",
      type: "Live",
      Fee: 12000,
      start: "Next Monday"

    },
    {
      subject: "Physics",
      Teacher: "Nitesh Chandrakar",
      image: "random",
      description: "Detailes Course on Moving charges & Magnetism CBSE Class 12 Boards",
      type: "Live",
      Fee: 12000,
      start: "Next Monday"

    },
    {
      subject: "Physics",
      Teacher: "Nitesh Chandrakar",
      image: "random",
      description: "Detailes Course on Moving charges & Magnetism CBSE Class 12 Boards",
      type: "Live",
      Fee: 12000,
      start: "Next Monday"

    },
    {
      subject: "Physics",
      Teacher: "Nitesh Chandrakar",
      image: "random",
      description: "Detailes Course on Moving charges & Magnetism CBSE Class 12 Boards",
      type: "Live",
      Fee: 12000,
      start: "Next Monday"

    },
    {
      subject: "Physics",
      Teacher: "Nitesh Chandrakar",
      image: "random",
      description: "Detailes Course on Moving charges & Magnetism CBSE Class 12 Boards",
      type: "Live",
      Fee: 12000,
      start: "Next Monday"

    },
  ]

  return (
    <div>
      
      <h1>Courses</h1>

      <Grid
  h='200px'
  templateRows='repeat(3, 1fr)'
  templateColumns='repeat(3, 1fr)'
  gap={4}
>
  {courses.map((e)=>(
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