import Navbar from "./Navbar";
import { useState } from "react";

function Timetable() {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const[time,setTime]=useState("")
  const[subject,setSubject]=useState("")
  
  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
  ];
  const timetable = [
    ["English", "Chemistry", "", "Physics", "", "Maths",],
    ["Chemistry", "", "English", "", "Maths", "",],
    ["", "English", "", "Chemistry", "", "Physics",],
    ["Physics", "", "Chemistry", "", "Chemistry", "",],
    ["Lunch", "Lunch", "Lunch", "Lunch", "Lunch", "Lunch",],
    ["", "Maths", "", "English", "Physics", "",],
    ["Maths", "", "Maths", "", "English", "English",],
    ["", "Physics", "Physics", "Maths", "", "Chemistry",],
  ]
const timesdata=(slot,subject)=>{
  setTime(slot)
  setSubject(subject)
console.log(slot,subject)
}
  return (
    <div style={{backgroundColor:"#e9e7f8",height:"1040px"}}>
<div>
{time && subject?(<h3 style={{margin:"0px",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"30%"}} >{time} <label style={{color:"#4035b8",}}>{subject}</label> <button className="button">Join Class</button> </h3>
    
     )
     
     
     
     :(<h1 style={{margin:"0px"}}>Weekly Timetable</h1>)}
      <div style={{width:"100%",height:"100%"}}>
</div>
     
        
        <table style={{ backgroundColor: "beige", border: "2px solid black",width:"90%",height:"100%" }}>
          <thead >
            <tr >
              <th style={{ color: "#4035b8" }}>Time</th>
              {daysOfWeek.map((day, index) => (
                <th style={{ color: "#4035b8" }} key={index}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody >
            {timeSlots.map((slot, index) => (
              <tr key={index}>
                <td style={{ color: "blue" ,paddingLeft:"7%" }}>{slot}</td>
                {timetable[index].map((i) => (
                  <td onClick={()=>{timesdata(slot,i)}} style={{ color: "black", backgroundColor: i ?  "#4035b8":"#e7e8f9",padding:"10px",color:"#e7e8f9" }} key={i}>{i}</td>
                ))}


              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Timetable;