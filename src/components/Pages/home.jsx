import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../Css/home.css"
import { Button, Stack } from "@chakra-ui/react";
function Home() {
    
  
    return (
      <div 
      className="maindivv"
      >
           <Stack mt={"10px"} direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
                
                <Link style={{textDecoration:"none",fontWeight:"bolder"}} className="linkss" to="/login">Login</Link>
            </Button>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
                
                <Link style={{textDecoration:"none",fontWeight:"bolder"}} to="/signup">Signup</Link>
            </Button>
            <Button rounded={'full'}> <Link style={{textDecoration:"none",fontWeight:"bolder"}} to="/admin">Admin Login</Link></Button>
          </Stack>
        
       
      </div>
    );
  }
  
  export default Home;