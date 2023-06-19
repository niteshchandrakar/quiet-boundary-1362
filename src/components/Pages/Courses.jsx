import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../Css/courses.module.css"

function Courses() {
  const [courses, setCourses] = useState([])
  const [sortby, setSortby] = useState("")
	const [category, setCategory] = useState("")
  let url='http://localhost:8080/courses'
  const fetchdata = async (e) => {

    await axios.get(url)
      .then(function (response) {
        // handle success

        setCourses(response.data);


      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })


  }
console.log(category,sortby)

  useEffect(() => {
		if (category && sortby) {
			url = url + `?subject=${category}&_sort=Fee&_order=${sortby}`
		} else if (category) {
			url = url + `?subject=${category}`
		} else if (sortby) {
			url = url + `?_sort=Fee&_order=${sortby}`
		}



		fetchdata(url)
	}, [sortby, category])
  return (
   <div style={{backgroundColor:"#e7e8f9"}}>
<div className={styles.maindiv}>
  
  
  <button className="button" value="Physics" onClick={(e)=>{setCategory(e.target.value)}}>Physics</button>
  <button className="button" value="Maths" onClick={(e)=>{setCategory(e.target.value)}}>Maths</button>
  <button className="button" value="Chemistry" onClick={(e)=>{setCategory(e.target.value)}}>Chemistry</button>
  <button className="button" value="English" onClick={(e)=>{setCategory(e.target.value)}}>English</button>
  <select className="button" onChange={(e)=>{setSortby(e.target.value)}}  >
         <option value="">Sort By</option>
         <option value="asc">Price Low to High</option>
         <option value="desc">Price High to Low</option>
        </select>
</div>
<div className={styles.content} >

      
{courses.map((e) => (
  <div className={styles.box}>
    
    
    <img style={{width:"100%",height:"50%"}} src={e.image} alt="" />
    <h5 style={{margin:"0"}}>Subject : {e.subject}</h5>
    <p style={{margin:"0"}}>For : {e.class}</p>
    <p style={{margin:"0"}}>Teacher: {e.Teacher}</p>
    
    <p style={{margin:"0"}}>Descreption: {e.description}</p>
    <p style={{margin:"2px"}}>starts on:{e.start}</p>
    <p style={{margin:"2px"}}>Course Fees: Rs. {e.Fee} <button className="button" onClick={()=>{alert("Course will be added to Your Profile Shortly")}}>Buy Course</button></p>
    
  </div>
))}
</div>
   </div>
  );
}

export default Courses;