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
    <div>

     {time?(<p>{time}{subject}</p>):("")}
      <div>
        <h1>Weekly Timetable</h1>
        <table style={{ backgroundColor: "beige", border: "2px solid black" }}>
          <thead >
            <tr >
              <th style={{ color: "red" }}>Time</th>
              {daysOfWeek.map((day, index) => (
                <th style={{ color: "red" }} key={index}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody >
            {timeSlots.map((slot, index) => (
              <tr key={index}>
                <td style={{ color: "blue" }}>{slot}</td>
                {timetable[index].map((i) => (
                  <td onClick={()=>{timesdata(slot,i)}} style={{ color: "black", backgroundColor: i ? "red" : "blue" }} key={i}>{i}</td>
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