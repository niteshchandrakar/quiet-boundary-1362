import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../Css/courses.module.css"
function Teachers() {
  const [follow, setFollow] = useState(true)
  const [teachers, setTeachers] = useState([])
  const fetchdata = async (e) => {

    await axios.get('http://localhost:8080/teachers')
      .then(function (response) {
        // handle success

        setTeachers(response.data);


      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  useEffect(() => {
    fetchdata()
  }, [])

  return (
    <div className={styles.content} style={{backgroundColor:"#e7e8f9"}}>


      {teachers.map((e) => (
        <div className={styles.box}>


          <img  style={{width:"100%",height:"200px"}} src={e.image} alt="" />
          <h1>{e.name}</h1>
          <p>{e.description}</p>
          <p>WatchTime: {e.watchtime} Minutes</p>
          <p>Followers: {e.followers} <button className="button" onClick={() => { setFollow(!follow) }}>Follow</button></p>
        
        </div>
      ))}
    </div>
  );
}

export default Teachers;