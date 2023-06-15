import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
function Login() {
  const [user, setuser] = useState(false)
  const [data, setdata] = useState([])
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const handlesubmit = async (e) => {
    e.preventDefault()
    await axios.get('http://localhost:8080/userdata')
      .then(function (response) {
        // handle success

        setdata(response.data);
        data.map((e) => {
          if (e.email == email && e.password == password) {
            
            setuser(true)
            console.log(user)
          }
        })

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

    


      




  }



  useEffect(() => {
    if (user) {
      navigate("/dashboard")
    }
  }, [user])
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handlesubmit} >
        <input type="email" onChange={(e) => { setEmail(e.target.value) }} />
        <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;