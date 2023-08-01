import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../Css/courses.module.css"
function Teachers() {
  const [follow, setFollow] = useState(true)
  const [teachers, setTeachers] = useState([])
  const fetchdata = async (e) => {

    await axios.get('https://eduboard.onrender.com/teachers')
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


          <img  style={{width:"100%",height:"180px"}} src={e.image} alt="" />
          <h1 style={{margin:"0"}}>{e.name}</h1>
          <p style={{margin:"0"}}>{e.description}</p>
          <p style={{margin:"0"}}>WatchTime: {e.watchtime} Minutes</p>
          <p style={{margin:"0"}}>Followers: {e.followers} <button className="button" onClick={() => { setFollow(!follow) }}>Follow</button></p>
        
        </div>
      ))}
    </div>
  );
}

export default Teachers;