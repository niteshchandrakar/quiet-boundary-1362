import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../Css/home.css"
function Home() {
    
  
    return (
      <div 
      className="maindivv"
      >
       
        <h1 style={{width:"100%",color:"#4035b8"}}> Please Login Or Signup</h1>
        <div style={{display:"flex",justifyContent:"space-around"}}>
        <Link style={{textDecoration:"none",fontWeight:"bolder"}} className="linkss" to="/login">Login</Link>
        <Link style={{textDecoration:"none",fontWeight:"bolder"}} to="/signup">Signup</Link>
        <Link style={{textDecoration:"none",fontWeight:"bolder"}} to="/admin">Admin Login</Link>
        </div>
       
      </div>
    );
  }
  
  export default Home;