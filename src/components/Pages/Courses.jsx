import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../Css/courses.module.css"
import { Box } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { Stack } from "@chakra-ui/react";
function Courses() {
  const [pagenumber,setPagenumber]=useState(1)
  const[totalpage,setTotalpage]=useState(1)
  const [courses, setCourses] = useState([])
  const [sortby, setSortby] = useState("")
	const [category, setCategory] = useState("")
  const[loading,setLoading]=useState(false)
  let totalpages=[]
  let url=`http://localhost:8080/courses?_page=${pagenumber}&_limit=4`
  const fetchdata = async (e) => {
setLoading(true)
    await axios.get(url)
      .then(function (response) {
        // handle success
setTimeout(() => {
  setTotalpage(Math.ceil((response.headers.get("x-total-count")/4)))
 
  setCourses(response.data);
setLoading(false)

},1000);
        

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

     
  }
  console.log(totalpage)
  for(let i=1;i<=totalpage;i++){
    totalpages.push(i)
  }

console.log(totalpages)
  useEffect(() => {
   
		if (category && sortby) {
      
			url = url + `&subject=${category}&_sort=Fee&_order=${sortby}`
		} else if (category) {
     
			url = url + `&subject=${category}`
		} else if (sortby) {
     
			url = url + `&_sort=Fee&_order=${sortby}`
		}



		fetchdata(url)
	}, [sortby, category,pagenumber])
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

      
{loading?(
  <div>
    <h1 style={{paddingBottom:"100%",color:"#4035B8"}}>Data is Loading . . .</h1>
   
  </div>

):(
  courses.map((e) => (
    <div className={styles.box}>
      
      
      <img style={{width:"100%",height:"50%"}} src={e.image} alt="" />
      <h5 style={{margin:"0"}}>Subject : {e.subject}</h5>
      <p style={{margin:"0"}}>For : {e.class}</p>
      <p style={{margin:"0"}}>Teacher: {e.Teacher}</p>
      
      <p style={{margin:"0"}}>Descreption: {e.description}</p>
      <p style={{margin:"2px"}}>starts on:{e.start}</p>
      <p style={{margin:"2px"}}>Course Fees: Rs. {e.Fee} <button className="button" onClick={()=>{alert("Course will be added to Your Profile Shortly")}}>Buy Course</button></p>
      
    </div>
  ))
  
  
)}
</div>
<div style={{display:"flex",justifyContent:"center",paddingBottom:"10%"}} >
{loading?(""):(  totalpages?.map((e)=>(
  <button disabled={e==pagenumber}  style={{backgroundColor: e==pagenumber ?  "#e7e8f9":"#4035b8",color: e==pagenumber ?  "#4035b8":"#e7e8f9"}} onClick={()=>{setPagenumber(e)}} className="button">{e}</button>
)))}
</div>
   </div>
  );
}

export default Courses;