import { useState } from "react";
import  '../styles/login.css';
import { useNavigate } from "react-router-dom";

function Login(){
  const navigate = useNavigate();
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const result=await fetch("http://localhost:8426/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        email,
        password
      })
    });
    const msg = await result.json();

    if(result.status === 404){
      alert("User not found");
    }
    else if(result.status === 401){
      alert("Invalid password");
    }
    else if(result.ok){
      alert("Login Success");
      navigate("/home");
    }
  }
  return(
    <div className="fields" >
      <form className="card" onSubmit={handleSubmit}>
        <h1>Algo Vision</h1>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
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