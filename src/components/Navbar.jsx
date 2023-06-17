import { Link } from "react-router-dom";
import React, { useContext,useState } from 'react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import "./navbar.css"
import { BellIcon, SettingsIcon } from "@chakra-ui/icons";
import { AppContext } from './AuthContextProvider'
import { Input } from '@chakra-ui/react'
import Profile from "./Profile";
import logo from "../logo.png"

function Navbar() {
  const { data, } = useContext(AppContext)
 const[profile,setProfile]=useState(false)
  const student = data.userdata
  console.log(student)
  return (
    <div className="maindiv"  >
           


      <div className="main">
      <img src={logo} style={{ width:"3%",marginRight:"50px" ,height:"100%" ,borderRadius:"20%"}} alt="" />
        
        <h5 className="name" >Hello,{student.firstname}!</h5>

        <  Input placeholder='Search' height={20} />
        <BellIcon style={{ color: "blue", paddingTop: "4px",paddingLeft:"100px",paddingRight:"15px" ,marginRight:"-5%"}} />
        <SettingsIcon style={{ color: "blue", paddingTop: "5px" }} />

        <img onClick={()=>{setProfile(!profile)}}  className="img" src="https://img.freepik.com/premium-photo/young-student-girl-with-backpack-white_488220-77966.jpg?size=626&ext=jpg&ga=GA1.1.1446806646.1681734089&semt=ais" alt="" />
        <p onClick={()=>{setProfile(!profile)}} style={{ marginRight: "161px",marginLeft:"-74px",marginBottom:"0px" }}>{student.firstname} {student.lastname}</p>
      </div>
      <div className="links" >
        <HStack className="vstack">
          <Link className="links" to="/dashboard">Dashboard</Link>
          <Link className="links" to="/courses">Courses</Link>
          <Link className="links" to="/teachers">Teachers</Link>
          <Link className="links" to="/timetable">Timetable</Link>
          <Link className="links" to="/classmates">Classmates</Link>
          <Link className="links" to="/messages">Messages</Link>

        </HStack>
  
      </div>
      {profile?(<Profile data={student}/>):("")}
    </div>
  );
}

export default Navbar;