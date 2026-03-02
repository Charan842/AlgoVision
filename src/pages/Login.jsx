import { useState } from "react";
import  '../styles/login.css'
function Login(){
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  return(
    <div className="fields" >
      <form className="card">
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
    </form>
    </div>
    
  );
}
export default Login