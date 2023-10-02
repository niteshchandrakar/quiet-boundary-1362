import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  InputGroup,
  InputRightElement,
  Select,
} from '@chakra-ui/react'
function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  
    const [data,setData]=useState({email:"",password:"",
  firstname:"",lastname:"",dob:"",phone:"",gender:"",town:"",
  class:"",image:""
  
  })
    const navigate=useNavigate()
    
    const handleformsubmit=(e)=>{
      e.preventDefault()
      axios.post(`https://eduboard.onrender.com/userdata`, {
        ...data
        })
        .then(function (response) {
        console.log(response);
        
        })
        .catch(function (error) {
        console.log(error);
        });
        navigate('/login')
    }
  
  
 
    return (
      <Stack className='maindivv' minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack  spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          
          <FormControl   id="email">
           
            <Input
            bgColor={"white"}
            type="email" 
            placeholder = "enter your email"
            onChange={(e)=>{setData({...data,email:e.target.value})}}

            />
          </FormControl>
          <FormControl   >
           
            <Input
            bgColor={"white"}
            type="text" 
            placeholder="Firstname" onChange={(e)=>{setData({...data,firstname:e.target.value})}}
            />
          </FormControl>
          <FormControl   >
           
            <Input
            bgColor={"white"}
            type="text" 
            placeholder="Lastname" onChange={(e)=>{setData({...data,lastname:e.target.value})}}
          />
          </FormControl>
          <FormControl   >
           
            <Input
           bgColor={"white"}
            type="date" placeholder="Lastname" onChange={(e)=>{setData({...data,dob:e.target.value})}}
          />
          </FormControl>
          <FormControl   >
           
            <Input
           bgColor={"white"}
           type="number" placeholder="Phone number" onChange={(e)=>{setData({...data,phone:e.target.value})}}
          />
          </FormControl>
          <FormControl   >
           
            <Input
           bgColor={"white"}
           type="text" placeholder="Town" onChange={(e)=>{setData({...data,town:e.target.value})}}
          />
          </FormControl>
          <FormControl   >
           
            <Input
           bgColor={"white"}
           type="text" placeholder="Class example-11th Grade" onChange={(e)=>{setData({...data,class:e.target.value})}}
          />
          </FormControl>
          <FormControl   >
           
            <Input
           bgColor={"white"}
           type="text" placeholder="Image Link" onChange={(e)=>{setData({...data,image:e.target.value})}}
          />
          </FormControl>
          <FormControl   >
           
           
            <Select 
            bgColor={"white"}
            onChange={(e)=>{setData({...data,gender:e.target.value})}} >
     <option value="male">Male</option>
     <option value="female">Female</option>
     <option value="Other">Other</option>
    </Select>
          </FormControl>


          <FormControl id="password" isRequired>
              
              <InputGroup>
             
                <Input
                bgColor={"white"}
                placeholder="Create password" onChange={(e)=>{setData({...data,password:e.target.value})}}
                type={showPassword ? 'text' : 'password'} 
                
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          <Stack spacing={6}>
          
            <Button 
            onClick={(e)=>handleformsubmit(e)}
            colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
          <FormLabel>Already have an account?</FormLabel>
          <Button
              rounded={'full'}
              w={"80px"}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
                
                <Link style={{textDecoration:"none"}} to="/login">Login</Link>
            </Button>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://plus.unsplash.com/premium_photo-1681487916420-8f50a06eb60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZ2lufGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60'
          }
        />
      </Flex>
    </Stack>
    );
  }
  
  export default Signup;

  <h1>Signup</h1>
  // <form onSubmit={handleformsubmit} >
  //  <input type="email" placeholder="Enter email"  />
  //  <br />
  //  <input type="password"  />
  //  <br />
  //  <input type="text"  />
  //  <br />
  //  <input type="text" />
  //  <br />
  //  <input  />
  //  <br />
  //  <input  />
  //  <br />
  //  <input  />
  //  <br />
  //  <input  />
  //  <br />
  //  <input  />
  //  <br />
  
  //  <br />
  //  <input className="button" type="submit" />
  // </form>