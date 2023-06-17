import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./home.css"
function Home() {
    
  
    return (
      <div 
      className="maindivv"
      >
       
        <h1>Login To View Details</h1>
        <div style={{display:"flex",justifyContent:"space-around"}}>
        <Link style={{textDecoration:"none"}} className="linkss" to="/login">Login</Link>
        <Link style={{textDecoration:"none"}} to="/signup">Signup</Link>
        </div>
       
      </div>
    );
  }
  
  export default Home;