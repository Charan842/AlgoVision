import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Algorithms from "../pages/Algorithms";
import Progress from "../pages/Progress";
import Profile from "../pages/Profile";

function Navroutes(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />}/>
            <Route path="/Algorithms" element={<Algorithms />} />
            <Route path="/Progress" element={<Progress/>} />
            <Route path="/Profile" element={<Profile/>} /> 
        </Routes>
    );
}

export default Navroutes;