import { useState } from 'react';
import Calendar from 'react-calendar';
import "./Calender.css"

function Calender() {
    const [date, setDate] = useState(new Date())

    const exams = [ { subject: "maths", edate: date.getDate()+1, },
    { subject: "physics", edate: date.getDate()+3, }
   , { subject: "chemistry", edate: date.getDate()+5, }

]


   


    return (
        <div className="aapp">

            <div className="calendar-container">
                <Calendar onChange={setDate} value={date} />
            </div>
            <div className="text-center">
                Selected date: {date.toDateString()}
                <h5>Upcoming exams</h5>
                {exams.map((e) => (
                    <p style={{ padding: "0" }}>{e.edate} july {e.subject}</p>
                ))}
            </div>
        </div>
    )

}

export default Calender;