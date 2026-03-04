import { useState } from "react";
import  '../styles/login.css';
import { useNavigate } from "react-router-dom";

function Login(){
  const navigate = useNavigate();
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  function handleSubmit(e){
       e.preventDefault();
       navigate("/home");
  }
  return(
    <div className="fields" >
      <form className="card" onSubmit={handleSubmit}>
        <h1>Algo Vision</h1>
        <div className="username">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </div>
         <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
         <div >
          <button type="submit">Login</button>
        </div>
        <div className="signup">
            New to AlgoVision ? <a href="/Signup">Register</a>
        </div>
    </form>
    </div>
    
  );
}
export default Login;