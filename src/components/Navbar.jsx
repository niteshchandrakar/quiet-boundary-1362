import { Link } from "react-router-dom";
import { Stack, HStack, VStack } from '@chakra-ui/react'
import "./navbar.css"
import { BellIcon, SettingsIcon } from "@chakra-ui/icons";
import { IconButton } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
function Navbar() {


  return (
    <div className="main" >



      <div style={{ display: "flex", margin: "10px" }}>
        <h3 style={{ margin: "0px", padding: "0px" }}>Hello,Alina!</h3>

        <  Input placeholder='Search' height={20} />
        <BellIcon style={{ color: "blue", paddingTop: "4px" }} />
        <SettingsIcon style={{ color: "blue", paddingTop: "13px" }} />

        <img style={{ paddingTop: "8px" }} width={25} height={25} src="data:image/png;base64,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" alt="" />
        <h5 style={{ margin: "0px", paddingTop: "13px" }}>Nitesh Chandrakar</h5>
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