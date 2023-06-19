import { useState } from 'react';
import Calendar from 'react-calendar';
import { Box } from '@chakra-ui/react';
import "../Css/Calender.css"
import { ExternalLinkIcon } from '@chakra-ui/icons';

function Calender() {
    const [date, setDate] = useState(new Date())

    const exams = [{ subject: "maths", edate: 17, },
    { subject: "physics", edate: 19, }
        , { subject: "chemistry",edate: 23 }

    ]

    const schedule = [
        { subject: "Maths", time: "12.30 pm" }
        , { subject: "Physics", time: "3.00 pm" }
        , { subject: "Chemistry", time: "5 pm" },
        { subject: "English", time: "7.30 pm" }]



    return (
        <div className="aapp">

            <div className="calendar-container">
                <Calendar onChange={setDate} value={date} />
            </div>
            <div className="text-center">
                Selected date: {date.toDateString()}
                <h3 style={{margin:"0px",marginTop:"10px",color:"#4035b8"}}>Upcoming exams</h3>
                {exams.map((e) => (
                   <p style={{ padding: "0" }}>

                   <Box bg='#4035b8' w='80%'  color='white' borderRadius="10px" mt="0px" >
                   <p style={{padding:"5px",marginTop:"0px"}}> {e.edate} July {e.subject} </p>
                   </Box>

               </p>
                ))}
                <h3 style={{margin:"0px",marginTop:"10px",color:"#4035b8"}}>Schedule</h3>
                {schedule.map((e) => (
                    <p style={{ padding: "0" }}>

                        <Box bg='#4035b8' w='80%'  color='white' borderRadius="10px" >
                        <p style={{padding:"5px",}}>{e.time} <label  >{e.subject}</label> Class <ExternalLinkIcon/> </p>
                        </Box>

                    </p>
                ))}
                {/* {schedule.map((e) => (
                    <p style={{ padding: "0" }}>{e.time} {e.subject}</p>
                ))} */}

            </div>
        </div>
    )

}

export default Calender;