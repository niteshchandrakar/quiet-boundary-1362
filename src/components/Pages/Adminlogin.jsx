import React, { useContext, useState } from 'react'
import { AppContext } from './AuthContextProvider'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';
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

export default function AdminLogin() {
    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState({
        subject: "", Teacher: "", image: "",
        description: "", type: "", Fee: "", start: "", class: ""

    })
   

    const handleformsubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8080/courses`, {
            ...data
        })
            .then(function (response) {
                console.log(response);
                alert("Course Added Successfully")
            })
            .catch(function (error) {
                console.log(error);
            });
        // navigate('/login')
    }



    const [adminlogin, setAdminLogin] = useState(false)

    const [data2, setdata] = useState({ email: "", password: "" })
    
    const handlesubmit = (e) => {
        e.preventDefault()
        
        if (data2.email == "nkc@gmail.com" && data2.password == "12345") {
            // Navigate("/postcourses")
            setAdminLogin(true)
        } else {
            alert("Invalid Credentials")
        }
    }


    return (

        adminlogin ? (
            <div className="maindivv" style={{}}>
                <h1>Add Courses</h1>
                <form onSubmit={handleformsubmit} >

                    <select className="button" onChange={(e) => { setData({ ...data, subject: e.target.value }) }} >
                        <option value="">Subject</option>
                        <option value="English">English</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Maths">Maths</option>
                        <option value="Physics">Physics</option>

                    </select>
                    <br />
                    <input type="text" placeholder="Teacher" onChange={(e) => { setData({ ...data, Teacher: e.target.value }) }} />
                    <br />
                    <input className="button" type="date" placeholder="Teacher" onChange={(e) => { setData({ ...data, start: e.target.value }) }} />
                    <br />

                    <input type="number" placeholder="Fees" onChange={(e) => { setData({ ...data, Fee: e.target.value }) }} />
                    <br />
                    <input type="text" placeholder="Desription" onChange={(e) => { setData({ ...data, description: e.target.value }) }} />
                    <br />

                    <input type="text" placeholder="Teacher Image" onChange={(e) => { setData({ ...data, image: e.target.value }) }} />
                    <br />
                    <select className="button" onChange={(e) => { setData({ ...data, type: e.target.value }) }} >
                        <option value="">Type</option>
                        <option value="Live">Live</option>
                        <option value="Recorder">Recorded</option>
                    </select>
                    <select className="button" onChange={(e) => { setData({ ...data, class: e.target.value }) }} >
                        <option value="">Class</option>
                        <option value="9th Class">Class 9</option>
                        <option value="10th Class">Class 10</option>
                        <option value="11th Class">Class 11</option>
                        <option value="12th Class">Class 12</option>


                    </select>
                    <br />
                    <input className="button" type="submit" />
                </form>
            </div>
        ) : (
            <Stack className='maindivv' minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack  spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Login as Admin</Heading>
          
          <FormControl   id="email">
            <FormLabel>Email address</FormLabel>
            <Input
            bgColor={"white"}
            type="email" 
            placeholder = "abc@gmail.com"
            onChange={(e) => { setdata({ ...data2, email: e.target.value }) }}
            />
          </FormControl>
          {/* <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl> */}
          <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
             
                <Input
                bgColor={"white"}
                placeholder="12345"
                type={showPassword ? 'text' : 'password'} 
                onChange={(e)=>{setdata({...data2,password:e.target.value})}}
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
          
            <Button onClick={(e)=>handlesubmit(e)} colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
          <FormLabel>Don't have an User account?</FormLabel>
          <Button
              rounded={'full'}
              w={"80px"}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
                
                <Link style={{textDecoration:"none"}} to="/signup">Signup</Link>
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
        )

    )
}



