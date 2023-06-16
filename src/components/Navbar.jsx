import { Link } from "react-router-dom";
import React, { useContext } from 'react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import "./navbar.css"
import { BellIcon, SettingsIcon } from "@chakra-ui/icons";
import { AppContext } from './AuthContextProvider'
import { Input } from '@chakra-ui/react'

function Navbar() {
  const { data, } = useContext(AppContext)

  const student = data.userdata
  console.log(student)
  return (
    <div className="maindiv"  >



      <div className="main">
        <h5 className="name" >Hello,{student.firstname}!</h5>

        <  Input placeholder='Search' height={20} />
        <BellIcon style={{ color: "blue", paddingTop: "4px",paddingLeft:"100px",paddingRight:"15px" }} />
        <SettingsIcon style={{ color: "blue", paddingTop: "5px" }} />

        <img className="img" src="https://img.freepik.com/premium-photo/young-student-girl-with-backpack-white_488220-77966.jpg?size=626&ext=jpg&ga=GA1.1.1446806646.1681734089&semt=ais" alt="" />
        <h5 style={{ margin: "0px", paddingTop: "13px",marginLeft:"10px" }}>{student.firstname} {student.lastname}</h5>
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
    </div>
  );
}

export default Navbar;