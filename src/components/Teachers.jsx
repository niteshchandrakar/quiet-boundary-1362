import Navbar from "./Navbar";

function Teachers() {
  const teachers = [
    {
      name: "Bharat Panchal",
      description: "Chemistry Educator | K12 and NEET | Use Code BPLIVE for Plus | 500000+ YouTube Subscribers Many Students Scored 100 in Chemistry☺️",
      image: "https://static.uacdn.net/educator_new/processed_image/0BEEEC92-AC87-4390-8A13-2A974745701C_.png?q=75&auto=format%2Ccompress&w=256",
      watchtime: "613K",
      followers: "117K"
    },
    {
      name: "Vishal Mahajan",
      description: "19 years Experience of Teaching Mathematics Use Refferal/invite Code (VMSIR) For Discount",
      image: "https://static.uacdn.net/educator_new/processed_thumbnail/10E5A811-7FF6-41FA-A6C1-D4B74E0885CB_.png?q=75&auto=format%2Ccompress&w=256",
      watchtime: "221K",
      followers: "43K"
    },
    {
      name: "Shipra Mishra",
      description: "Advocate | MA English | B.Ed | CS | 9 years of teaching experience | No.1 English educator | code - SDC18/SDCLIVE ",
      image: "https://static.uacdn.net/educator_new/processed_thumbnail/852FD871-82F0-4A0B-86C6-DA28DBADCDCD_.png?q=75&auto=format%2Ccompress&w=256",
      watchtime: "359K",
      followers: "57K"
    },
    {
      name: "Vinod Kumar",
      description: "CEO at AVJMS EDUCARE PVT LTD. Running School Project With Dwarka International School Visiting Faculty at ALLEN ROHTAK(NEET Level) YOUTUBER",
      image: "https://static.uacdn.net/educator_new/processed_thumbnail/82E8D9FC-7E91-49C7-B488-83036520CA74_.png?q=75&auto=format%2Ccompress&w=256",
      watchtime: "361K",
      followers: "21K"
    },
    {
      name: "Nikita Shukla",
      description: "Biology Educator,&quot;'MSc Botany Honours'' 6+ years of teaching experience. Cleared NEET,UPTU &amp; AKTU Mentored 2,000+ students for NEET &amp;Boards.",
      image: "https://static.uacdn.net/educator_new/processed_thumbnail/4D8EB422-462E-42B6-B23C-D9B589BE07E5_.png?q=75&auto=format%2Ccompress&w=256",
      watchtime: "221K",
      followers: "30K"
    },
    {
      name: "Shantam Gupta",
      description: "Qualified CA and CS Mentored over 15000 students in last 7 years of teaching. Produced 11 AIR’s in CMA and CA Courses Law and Economics",
        image : "https://static.uacdn.net/educator_new/processed_thumbnail/E69127C7-CD2F-4272-B81E-2BFCBF0AA089_.png?q=75&auto=format%2Ccompress&w=256",
      watchtime: "245K",
      followers: "16K"
    },
  ]

  return (
    <div>
      
      <h1>teachers</h1>
      {teachers.map((e) => (
        <h1>{e.name}</h1>
      ))}
    </div>
  );
}

export default Teachers;