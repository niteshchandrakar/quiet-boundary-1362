import Navbar from "./Navbar";

function Timetable() {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];
  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
  ];
  const timetable=[
    ["English","","","Physics","","Maths",],
["","Chemistry","","","Ui Design","",],
["hiii","hiii","hii333","hiii44","hii55","hiii66",],
["hiii","hiii22","hii333","hiii44","hii55","hiii66",],
["hiii","hiii22","hii333","hiii44","hii55","hiii66",],
["hiii","hiii22","hii333","hiii44","hii55","hiii66",],
]
  
    return (
      <div>
        
        <h1>Timetable</h1>
        <div>
      <h1>Weekly Timetable</h1>
      <table style={{backgroundColor:"beige",border:"2px solid black"}}>
        <thead >
          <tr >
            <th style={{color:"red"}}>Time</th>
            {daysOfWeek.map((day, index) => (
              <th style={{color:"red"}} key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody >
          {timeSlots.map((slot, index) => (
            <tr key={index}>
              <td style={{color:"blue"}}>{slot}</td>
              {timetable[index].map(( i) => (
                <td style={{color:"black",backgroundColor: i ?"red":"blue"}} key={i}>{i}</td>
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