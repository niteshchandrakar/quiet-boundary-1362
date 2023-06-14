import { Route,Routes } from "react-router-dom";
import Home from "./home";
import Login from "../Login";
import Signup from "../signup";
import Dashboard from "../Dashboard";
import Classmates from "../Classmates";
import Courses from "../Courses";
import Messages from "../Messages";
import Teachers from "../Teachers";
import Timetable from "../Timetable";


const AllRoutes = () => {
  return <div>
    {/* Add Routes here */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/classmates" element={<Classmates/>} />
      <Route path="/courses" element={<Courses/>} />
      <Route path="/messages" element={<Messages/>} />
      <Route path="/teachers" element={<Teachers/>} />
      <Route path="/timetable" element={<Timetable/>} />
      
    </Routes>
    </div>;
};

export default AllRoutes;