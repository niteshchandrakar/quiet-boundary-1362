import { Link } from "react-router-dom";
import Navbar from "../Navbar";

function Home() {
    
  
    return (
      <div>
       
        <h1>Home</h1>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
       
      </div>
    );
  }
  
  export default Home;