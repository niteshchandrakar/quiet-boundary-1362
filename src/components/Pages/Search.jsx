import { useEffect, useState } from "react";
import axios from "axios";
function Search({ data }) {


    const [courses, setCourses] = useState([])
    const fetchdata = async (e) => {

        await axios.get(`http://localhost:8080/courses?q=${data}`)
            .then(function (response) {
                // handle success

                setCourses(response.data);


            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })


    }

    useEffect(() => {
        fetchdata()
    })
    return (
        <div >
            <h1>Courses</h1>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",width:"95%",height:"100%",marginLeft:"2%"}} >
          
           {courses.map((e) => (
  <div style={{boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",margin:"10px",alignContent:"center",borderRadius:"10px",}}>
    
    
    <img style={{width:"100%",height:"50%"}} src={e.image} alt="" />
    <h5 style={{margin:"0"}}>Subject : {e.subject}</h5>
    <p style={{margin:"0"}}>For : {e.class}</p>
    <p style={{margin:"0"}}>Teacher: {e.Teacher}</p>
    
    <p style={{margin:"0"}}>Descreption: {e.description}</p>
    <p style={{margin:"2px"}}>starts on:{e.start}</p>
    <p style={{margin:"2px"}}>Course Fees: Rs. {e.Fee}<button className="button" onClick={()=>{alert("Course will be added to Your Profile Shortly")}}>Buy Course</button></p>
  
  </div>
))}

        </div>
        </div>
    );
}

export default Search;