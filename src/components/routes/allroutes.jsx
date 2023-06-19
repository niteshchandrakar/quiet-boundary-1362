import { Route,Routes } from "react-router-dom";
import Home from "../Pages/home";
import Login from "../Pages/Login";
import Signup from "../Pages/signup";
import Dashboard from "../Pages/Dashboard";
import Classmates from "../Pages/Classmates";
import Courses from "../Pages/Courses";
import Messages from "../Pages/Messages";
import Teachers from "../Pages/Teachers";
import Timetable from "../Pages/Timetable";
import PrivateRoute from "./Privaterouts";
import Postcourses from "../Pages/postcourses";
import AdminLogin from "../Pages/Adminlogin";


const AllRoutes = () => {
  return <div>
    {/* Add Routes here */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      <Route path="/classmates" element={<Classmates/>} />
      <Route path="/courses" element={<Courses/>} />
      <Route path="/postcourses" element={<Postcourses/>} />
      <Route path="/teachers" element={<Teachers/>} />
      <Route path="/admin" element={<AdminLogin/>} />
      <Route path="/timetable" element={<PrivateRoute><Timetable/></PrivateRoute>} />
      
    </Routes>
    </div>;
};

export default AllRoutes;