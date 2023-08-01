import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from 'react'
import { Stack, HStack, VStack, Button } from '@chakra-ui/react'
import styles from "../Css/navbar.module.css"
import { BellIcon, SettingsIcon } from "@chakra-ui/icons";
import { AppContext } from './AuthContextProvider'
import { Input } from '@chakra-ui/react'
import Profile from "./Profile";
import logo from "./logo.png"
import Search from "./Search";

function Navbar() {
  const [search, setSearch] = useState("")
const Navigate=useNavigate()
  const { data, logout } = useContext(AppContext)
  const [profile, setProfile] = useState(false)
  const student = data.userdata

  return (
    <div className={styles.maindiv}  >



      <div className={styles.main}>
        <div >
          <img src={logo} className={styles.logo} alt="" onClick={()=>{Navigate("/dashboard")}} />
        </div>

        <div >
          <h5 style={{ margin: "0px" }} >Hello,{student.firstname}!</h5>

          <  Input placeholder='🔍 Search Courses' height={15} onChange={(e) => { setSearch(e.target.value) }} ></Input>
        </div>


        <div className={styles.mainn} >
          <img onClick={() => { setProfile(!profile) }} className={styles.img} src={student.image} alt="" />
          <p style={{ margin: "0px" }} onClick={() => { setProfile(!profile) }} >{student.firstname} {student.lastname}</p>
        </div>

        <div className={styles.mainn} >
          <BellIcon style={{ color: "blue", width: "30px", height: "30px", marginRight: "15px" }} />

          {data.isAuth ? (<button className="button" onClick={logout}>Logout</button>) : ("")}
        </div>
      </div>



      <div className={styles.linkdiv} >
        <div className={styles.vstack}>
          <Link className={styles.links} to="/dashboard">Dashboard</Link>
          <Link className={styles.links} to="/courses">Courses</Link>
          <Link className={styles.links} to="/teachers">Teachers</Link>
          <Link className={styles.links} to="/timetable">Timetable</Link>
         


        </div>

      </div>
      {profile ? (<Profile data={student} />) : ("")}
      {search ? (<Search data={search} />) : ("")}
    </div>
  );
}

export default Navbar;