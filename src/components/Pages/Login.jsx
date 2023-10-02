import React, { useContext } from 'react'
import { AppContext } from './AuthContextProvider'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'

import { Link } from 'react-router-dom'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from 'react'
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
} from '@chakra-ui/react'

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
      const Navigate=useNavigate()
  const toast = useToast()
    const {data,setdata,HandleFormRequest} =useContext(AppContext)
    
    if(data.isAuth){
        alert("Login Succesfull")
      Navigate('/dashboard')
  
      
    }
   
  return (
    <Stack className='maindivv' minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack  spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          
          <FormControl   id="email">
            <FormLabel>Email address</FormLabel>
            <Input
            bgColor={"white"}
            type="email" 
            placeholder = "abc@gmail.com"
                                onChange={(e)=>{setdata({...data,email:e.target.value})}}
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
                onChange={(e)=>{setdata({...data,password:e.target.value})}}
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
          
            <Button onClick={(e)=>HandleFormRequest(e)} colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
          <FormLabel>Don't have an account?</FormLabel>
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
}


// export default function Login() {
//   const Navigate=useNavigate()
//   const toast = useToast()
//     const {data,setdata,HandleFormRequest} =useContext(AppContext)
    
//     if(data.isAuth){
//         alert("Login Succesfull")
//       Navigate('/dashboard')
  
      
//     }
//     return (
//         <div className='maindivv'>
//             <form   onSubmit={HandleFormRequest}>
            
//                 <input
//                 style={{marginTop:"20px",marginBottom:"10px"}}
//                     type = "email"
                    
//                     data-testid = "email"
//                     placeholder = "abc@gmail.com"
//                     onChange={(e)=>{setdata({...data,email:e.target.value})}}
//                 />
//                 <br />
//                 <input
//                 style={{marginBottom:"10px"}}
//                     type = "password"
                    
//                     placeholder = "12345"
//                     onChange={(e)=>{setdata({...data,password:e.target.value})}}
//                 />
//                 <br />
//                 <input className="button" type = "submit" />

//             </form>  
                          
//         </div>
//     )
// }
