import { useState } from "react";
import  '../styles/login.css';
import { useNavigate } from "react-router-dom";

function Signup(){
  const navigate = useNavigate();
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const handleSubmit = async (e) => {
  e.preventDefault();

  try{
    const result= await fetch("http://localhost:8426/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    });

    const data = await result.json();
    console.log(data);
    navigate("/")

  }catch(err){
    console.error(err);
  }
};
  return(
    <div className="fields" >
      <form className="card" onSubmit={handleSubmit}>
        <h1>Algo Vision</h1>
        <div className="username">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
         <div >
          <button type="submit">Register</button>
        </div>
        <div className="signup">
            Already Registered to AlgoVision ? <a href="/">Login</a>
        </div>
    </form>
    </div>
    
  );
}
export default Signup;