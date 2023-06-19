import { Link } from "react-router-dom";
import  { useContext, useState } from 'react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import styles from "../Css/navbar.module.css"
import { BellIcon, SettingsIcon } from "@chakra-ui/icons";
import { AppContext } from './AuthContextProvider'
import { Input } from '@chakra-ui/react'
import Profile from "./Profile";
import logo from "./logo.png"
import Search from "./Search";

function Navbar() {
  const [search, setSearch] = useState("")
  console.log(search)
  const { data, } = useContext(AppContext)
  const [profile, setProfile] = useState(false)
  const student = data.userdata

  return (
    <div className={styles.maindiv}  >


  {data.isAuth?(
    <div className={styles.main}>
        <img src={logo} className={styles.logo} alt=""  />
  
        <h5 className={styles.name} >Hello,{student.firstname}!</h5>

        <  Input placeholder='🔍 Search Courses' height={20} onChange={(e) => { setSearch(e.target.value) }} ></Input>
        <BellIcon className={styles.bell}  style={{ color: "blue",  }} />
        <SettingsIcon style={{ color: "blue", paddingTop: "5px" }} />

        <img onClick={() => { setProfile(!profile) }} className={styles.img} src={student.image} alt="" />
        <p onClick={() => { setProfile(!profile) }} style={{ marginRight: "161px", marginLeft: "-11%", marginBottom: "0px" }}>{student.firstname} {student.lastname}</p>
      </div>

  ):("")}
      
      <div className={styles.linkdiv} >
        <div className={styles.vstack}>
          <Link className={styles.links} to="/dashboard">Dashboard</Link>
          <Link className={styles.links} to="/courses">Courses</Link>
          <Link className={styles.links} to="/teachers">Teachers</Link>
          <Link className={styles.links} to="/timetable">Timetable</Link>
          <Link className={styles.links} to="/classmates">Classmates</Link>
          

        </div>

      </div>
      {profile ? (<Profile data={student} />) : ("")}
      {search ? (<Search data={search} />) : ("")}
    </div>
  );
}

export default Navbar;